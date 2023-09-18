import { TodoItem } from "./TodoItem";
import { PropTypes } from "prop-types";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
  };

  return (
    <ul className="px-10 pt-6 pb-8 mb-4 w-auto text-sm font-medium text-customBlack bg-white max-h-screen">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} //...todo passes all the props of the TodoItem object.
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
