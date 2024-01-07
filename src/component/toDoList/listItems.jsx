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
      <ListGroup.Item style={{ display: "flex"}}>
        <input type="checkbox" onChange={() => dispatch(checkBox(index))} />{" "}
        <input
          type="text"
          style={{
            flexGrow: 1,
            borderWidth: 0,
            backgroundColor: "inherit",
            overflow: "scroll",
            textDecoration: done === true ? "line-through" : "none",
            color: done === true ? "gray" : "black",
            margin: 5,
          }}
          value={editInputValue}
          onChange={(e) => setEditInputValue(e.target.value)}
        />
        <Button
          variant="outline-danger"
          onClick={() => dispatch(delWork(index))}
        >
          x
        </Button>
      </ListGroup.Item>
    </>
  );
}
