const PenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const SearchEmptyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
    <path d="M8 11h6M11 8v6" strokeLinecap="round" />
  </svg>
);

export default function EmptyState({ isSearching = false, onCreateNew }) {
  if (isSearching) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-500">
          <SearchEmptyIcon />
        </div>

        <h3 className="mb-2 text-2xl font-semibold text-gray-800">
          No matches found
        </h3>

        <p className="max-w-xs text-center text-sm leading-relaxed text-gray-500">
          Try different keywords or check your spelling. Notes search by title
          and content.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative mb-8">
        <div className="absolute -bottom-1 -right-1 h-36 w-28 rotate-3 rounded-lg bg-gray-300 shadow-sm" />
        <div className="absolute -bottom-0.5 -right-0.5 h-36 w-28 rotate-1 rounded-lg bg-gray-200 shadow-sm" />

        <div className="relative flex h-36 w-28 flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
          <div className="h-1.5 w-full rounded bg-gray-300" />
          <div className="h-1.5 w-3/4 rounded bg-gray-300" />
          <div className="h-1.5 w-full rounded bg-gray-300" />
          <div className="h-1.5 w-1/2 rounded bg-gray-300" />
          <div className="mt-2 text-gray-500">
            <PenIcon />
          </div>
        </div>
      </div>

      <h3 className="mb-2 text-2xl font-semibold text-gray-800">
        Your notebook is empty
      </h3>

      <p className="mb-6 max-w-xs text-center text-sm leading-relaxed text-gray-500">
        Start capturing your ideas, thoughts, and reminders. Every great story
        begins with a single note.
      </p>

      <button
        onClick={onCreateNew}
        className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition hover:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        Write your first note
      </button>
    </div>
  );
}
