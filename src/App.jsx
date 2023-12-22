import "./index.css";
import React from "react";
import AddTodos from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Filter } from "./components/Filter";

export default function App() {
  return (
    <div className="App flex-col space-y-6">
      <h1 className="text-5xl font-bold mb-20">What's your plans for today?</h1>
      <AddTodos></AddTodos>
      <Filter></Filter>
      <TodoList></TodoList>
    </div>
  );
}