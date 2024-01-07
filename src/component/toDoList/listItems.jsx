import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkBox, delWork } from "../../utils/slices/todolistSlice";

export default function ListItems({ w, index }) {
  const done = useSelector((state) => state.todolist.works[index].done);
  const dispatch = useDispatch();
  const [editInputValue, setEditInputValue] = useState(w.title);
  return (
    <>
      <ListGroup.Item style={{ display: "flex", backgroundColor: "#fbf3e4" }}>
        <input type="checkbox" onChange={() => dispatch(checkBox(index))} />
        <div
          style={{
            flexGrow: 1,
            textDecoration: done === true ? "line-through" : "none",
            color: done === true ? "gray" : "black",
          }}
        >
          {" "}
          <input
            type="text"
            style={{
              borderWidth: 0,
              backgroundColor: "inherit",
              overflow: "scroll",
            }}
            value={editInputValue}
            onChange={(e) =>setEditInputValue(e.target.value)}
          />
        </div>
        <Button
          variant="outline-danger"
          className="p-1 m-1"
          onClick={() => dispatch(delWork(index))}
        >
          x
        </Button>
      </ListGroup.Item>
    </>
  );
}
