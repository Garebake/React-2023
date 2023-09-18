import { useState } from "react";
import { PropTypes } from "prop-types";

export function NewTodoForm({ onSubmit }) {
  NewTodoForm.propTypes = {
    onSubmit: PropTypes.func,
  };

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          htmlFor="item"
          className="block text-customBlack text-sm font-bold mb-2"
        >
          New Item
        </label>
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="bg-secondary hover:bg-primary text-customBlack hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add
      </button>
    </form>
  );
}
