import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../features/createSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.todo) || [];
  const dispatch = useDispatch();

  // update task and change value of checkbox (checked) is true or false
  const handleToggleTodo = (id) => {
    dispatch(toggleTask(id));
  };

  // delete task
  const handleRemoveTask = (id) => {
    dispatch(deleteTask(id));
  };

  // edit task
  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  // when edit
  const handleEditTask = (id) => {
    setEditingId(id);
    setEditedValue(tasks.find((task) => task.id === id).value);
  };

  // save edit
  const handleSave = (e) => {
    if (editingId !== null) {
      dispatch(editTask({ id: editingId, value: editedValue }));
      setEditingId(null);
    }
  };

  // filter
  const todos = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);

  const filteredTodos = () => {
    if (filter === "COMPLETED") {
      return todos.filter((task) => task.checked);
    }
    if (filter === "NOT_COMPLETED") {
      return todos.filter((task) => !task.checked);
    }
    return todos;
  };

  return (
    <>
      <ul>
        {/* show all tasks */}
        {filteredTodos().map((task) => (
          <li key={task.id} className="mb-1">
            {/* checkbox */}
            <input
              type="checkbox"
              className="size-4"
              checked={task.checked}
              onChange={() => handleToggleTodo(task.id)}
            />

            {/* edit task */}
            {editingId === task.id ? (
              <>
                <input
                  className="mx-12 min-w-96 rounded-md h-9 px-2"
                  type="text"
                  maxLength={70}
                  name={task.id}
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
                <button
                  className="hover:bg-green-900"
                  onClick={() => {
                    editedValue !== ""
                      ? handleSave()
                      : alert("The task you are editing is still empty");
                  }}
                >
                  ✔
                </button>
              </>
            ) : (
              // display tasks if not in editing mode
              <p
                style={{
                  minWidth: 620,
                  textDecoration: task.checked ? "line-through" : "none",
                }}
              >
                {task.value}
              </p>
            )}
            {editingId !== task.id && (
              <div>
                {/* edit button */}
                <button
                  onClick={() => handleEditTask(task.id)}
                  className="edit-button m-2 hover:bg-violet-900"
                >
                  🖋
                </button>

                {/* delete button */}
                <button
                  onClick={() => handleRemoveTask(task.id)}
                  className="delete-button hover:bg-red-950"
                >
                  ❌
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
const mapState = (state) => ({
  todo: state.todo,
});

const mapDispatch = {
  toggleTask,
  deleteTask,
  editTask,
};

export default connect(mapState, mapDispatch)(TodoList);
