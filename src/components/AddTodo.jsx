import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/createSlice";
import "../App.css";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  //  add todo
  const handleAddTodo = () => {
    inputValue.trim() !== ""? (
      dispatch(addTodo(inputValue)), setInputValue("")
      ) : window.alert("Please input your task")
  };

  return (
    <>
      <div className="input-group">
        <input
          required
          type="text"
          maxLength={70}
          value={inputValue}
          autoComplete="off"
          className="input px-2"
          placeholder="Add your new task"
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <button onClick={handleAddTodo} className="hover:bg-violet-600 ">
          <p className="text-xl">+</p>
        </button>
      </div>
    </>
  );
};

export default AddTodos;