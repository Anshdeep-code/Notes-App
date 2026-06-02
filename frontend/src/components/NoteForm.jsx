import { useEffect, useState } from "react";

export default function NoteForm({ note, onSubmit, onCancel, isLoading }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    onSubmit({
      title,
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm text-gray-300">Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title"
          className="w-full border border-gray-700 rounded p-3 bg-gray-900 text-white"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">Content</label>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note here..."
          rows="6"
          className="w-full border border-gray-700 rounded p-3 bg-gray-900 text-white"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          {isLoading ? "Saving..." : note ? "Update Note" : "Create Note"}
        </button>
      </div>
    </form>
  );
}
