import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addInput, addWork } from "../../utils/slices/todolistSlice";

export default function AddInput() {
  const addInputValue = useSelector((state) => state.todolist.value);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Add new Work :{" "}
        <input
          type="text"
          value={addInputValue}
          onChange={(e) => dispatch(addInput(e.target.value))}
        />
      </label>{" "}
      <Button
        variant="outline-light"
        className="m-1 p-2"
        onClick={() => dispatch(addWork(addInputValue))}
      >
        Add
      </Button>
    </>
  );
}
