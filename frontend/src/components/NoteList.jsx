import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";

export default function NoteList({
  notes,
  isLoading,
  isSearching,
  onEdit,
  onDelete,
  onCreateNew,
}) {
  if (isLoading) {
    return <p className="text-gray-500">Loading notes...</p>;
  }

  if (!notes.length) {
    return <EmptyState isSearching={isSearching} onCreateNew={onCreateNew} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
