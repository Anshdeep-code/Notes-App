export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>

      <p className="text-gray-300 text-sm mb-4">
        {note.content.length > 120
          ? note.content.slice(0, 120) + "..."
          : note.content}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {new Date(note.createdAt).toLocaleDateString()}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(note)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
