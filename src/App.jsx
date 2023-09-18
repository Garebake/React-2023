import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

import "./index.css";
import { Nav } from "./sidebar/Nav";
import { Home } from "./pages/Home";
import { Budget } from "./pages/Budget";
import { NFL } from "./pages/NFL";
import { Income } from "./pages/Income";
import { Expenses } from "./pages/Expenses";
import { Trends } from "./pages/Trends";

/** Questions **********
 * 1. How does 'currentTodos' work in addTodo, toggleTodo, and deleteTodo? How is it getting set to the current todos list?
 * Answer: The currentTodos is automatically set to the 'previous' state value because it is passed as a parameter to that arrow function within setTodos.
 *         Then the logic in the arrow function can use that value to set a new value.
 */

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/nfl" element={<NFL />} />
      </Routes>
    </>
  );
}
