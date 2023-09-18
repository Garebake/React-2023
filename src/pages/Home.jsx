import { useEffect, useState } from "react";
import { NewTodoForm } from "../NewTodoForm";
import { TodoList } from "../TodoList";

export function Home() {
  // Sets default todos to whatever is in local storage by using arrow function as useState parameter.
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }

    return JSON.parse(localValue);
  });

  // Uses useEffect to connect to localStorage and set value of ITEMS in local storage.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Add passed todo to the list of todos.
  function addTodo(title) {
    setTodos((currentTodos) => {
      // Whatever is passed as the parameter before the arrow function gets the value of todos.
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // Set the checkbox on the passed todo to the completed parameter value.
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  // Deletes the todo with passed id from todos.
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div id="top-level" className="flex">
        <div id="main" className="ml-16 w-1/2 bg-white shadow-md rounded ">
          <NewTodoForm onSubmit={addTodo} />
          <h1 className="text-customBlack text-lg font-bold px-8">Todo List</h1>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}
