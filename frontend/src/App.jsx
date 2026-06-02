import { useEffect, useState } from "react";

import noteService from "./services/noteService";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Modal from "./components/Modal";
import ConfirmDialog from "./components/ConfirmDialog";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await noteService.getAll();
      setNotes(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const openCreate = () => {
    setEditingNote(null);
    setFormOpen(true);
  };

  const openEdit = (note) => {
    setEditingNote(note);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingNote(null);
  };

  const handleSubmit = async (data) => {
    try {
      setFormLoading(true);
      setError("");

      if (editingNote) {
        const updated = await noteService.update(editingNote._id, data);
        setNotes((prev) =>
          prev.map((note) => (note._id === editingNote._id ? updated : note)),
        );
      } else {
        const created = await noteService.create(data);
        setNotes((prev) => [created, ...prev]);
      }

      closeForm();
    } catch (err) {
      setError(err.message || "Could not save note");
    } finally {
      setFormLoading(false);
    }
  };

  const openDelete = (note) => {
    setDeleteTarget(note);
  };

  const closeDelete = () => {
    setDeleteTarget(null);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;

    try {
      setDeleteLoading(true);
      setError("");

      await noteService.delete(deleteTarget._id);
      setNotes((prev) => prev.filter((note) => note._id !== deleteTarget._id));
      closeDelete();
    } catch (err) {
      setError(err.message || "Could not delete note");
    } finally {
      setDeleteLoading(false);
    }
  };

  const filteredNotes = notes.filter((note) => {
    const text = `${note.title} ${note.content}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-30 border-b border-gray-700 bg-gray-900">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div>
            <h1 className="text-xl font-semibold text-white">Notepad</h1>
            <p className="text-xs text-gray-400">
              {notes.length} {notes.length === 1 ? "note" : "notes"}
            </p>
          </div>

          <button
            onClick={openCreate}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            New note
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-gray-500">Loading notes...</p>
        ) : (
          <NoteList
            notes={filteredNotes}
            isLoading={loading}
            isSearching={Boolean(search)}
            onEdit={openEdit}
            onDelete={openDelete}
            onCreateNew={openCreate}
          />
        )}
      </main>

      <Modal
        isOpen={formOpen}
        onClose={closeForm}
        title={editingNote ? "Edit note" : "New note"}
        size="lg"
      >
        <NoteForm
          note={editingNote}
          onSubmit={handleSubmit}
          onCancel={closeForm}
          isLoading={formLoading}
        />
      </Modal>

      <ConfirmDialog
        isOpen={Boolean(deleteTarget)}
        onClose={closeDelete}
        onConfirm={handleDelete}
        title="Delete this note?"
        message={`"${deleteTarget?.title || "Untitled"}" will be permanently deleted.`}
        isLoading={deleteLoading}
      />
    </div>
  );
}
