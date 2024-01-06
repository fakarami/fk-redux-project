import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delWork } from "../../utils/slices/todolistSlice";

export default function ListItems({ w,index }) {
  const dispatch=useDispatch()
  return (
    <>
      <ListGroup.Item className="d-flex">
        <input type="checkbox" />
        <div style={{ flexGrow: 1 }}> {w.title}</div>
        <Button variant="outline-warning"
        onClick={()=>dispatch(delWork(index))}
        >x</Button>
        <Button variant="outline-success">e</Button>
      </ListGroup.Item>
    </>
  );
}
