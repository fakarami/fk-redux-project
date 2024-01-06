import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function AddInput() {
  const addInputValue = useSelector((state) => state.todolist.value);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Add new Work:{" "}
        <input
          type="text"
          value={addInputValue}
          onChange={(e) => dispatch(AddInput(e.target.value))}
        />
      </label>
      <Button variant="outline-primary" className="m-1 p-1">
        Add
      </Button>
    </>
  );
}
