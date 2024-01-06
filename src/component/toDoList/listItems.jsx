import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkBox, delWork } from "../../utils/slices/todolistSlice";

export default function ListItems({ w, index }) {
  const done = useSelector((state) => state.todolist.works[index].done);
  const dispatch = useDispatch();
  return (
    <>
      <ListGroup.Item className="d-flex">
        <input type="checkbox" onChange={() => dispatch(checkBox(index))} />
        <div
          style={{
            flexGrow: 1,
            textDecoration: done === true ? "line-through" : "none",
            color: done === true ? "gray" : "black",
          }}
        >
          {" "}
          {w.title}
        </div>
        <Button
          variant="outline-warning"
          onClick={() => dispatch(delWork(index))}
        >
          x
        </Button>
        <Button variant="outline-success">e</Button>
      </ListGroup.Item>
    </>
  );
}
