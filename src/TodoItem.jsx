import { PropTypes } from "prop-types";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  TodoItem.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
  };
  return (
    <li className="px-4 py-2 border-b border-customWhite rounded-t-lg hover:bg-customWhite hover:rounded-lg">
      <button
        className="px-3 py-2 text-xs font-small text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={() => deleteTodo(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
      <label className="pr-3 text-customBlack">
        <input
          className="h-4 w-4 mx-3 accent-secondary"
          type="checkbox"
          id="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
    </li>
  );
}
