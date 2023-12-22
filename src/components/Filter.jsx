import React from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../features/createSlice";

export function Filter() {
  const dispatch = useDispatch();

  // handle filter buttons
  const handleFilter = (filter) => {
    dispatch(filterTask(filter));
  };

  return (
    <>
      <div className="flex justify-center gap-3">
        <button className="hover:bg-violet-600" onClick={() => handleFilter("ALL")}>All</button>
        <button className="hover:bg-violet-600" onClick={() => handleFilter("NOT_COMPLETED")}>Active</button>
        <button className="hover:bg-violet-600" onClick={() => handleFilter("COMPLETED")}>Completed</button>
      </div>
    </>
  );
}
