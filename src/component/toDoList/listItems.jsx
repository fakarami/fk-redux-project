import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function ListItems({ w }) {
  return (
    <>
      <ListGroup.Item className="d-flex">
        <input type="checkbox" />
        <div style={{ flexGrow: 1 }}> {w.title}</div>
        <Button variant="outline-warning">x</Button>
        <Button variant="outline-success">e</Button>
      </ListGroup.Item>
    </>
  );
}
