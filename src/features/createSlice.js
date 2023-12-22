import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  filter: "All",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add
    addTodo: (state, action) => {
      state.todo.unshift({
        id: Date.now(),
        checked: false,
        value: action.payload,
      });
    },

    // update
    toggleTask: (state, action) => {
      const task = state.todo.find((task) => task.id === action.payload);
      task.checked = task.checked ? false : true;
    },

    // edit
    editTask: (state, action) => {
      const task = state.todo.find((task) => task.id === action.payload.id);
      task && (task.value = action.payload.value);
    },

    // delete
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((task) => task.id !== action.payload);
    },

    // filter
    filterTask: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTask, deleteTask, editTask, filterTask } =
  todoSlice.actions;

export const reducer = todoSlice.reducer;
