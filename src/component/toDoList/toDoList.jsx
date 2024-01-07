import React from "react";
import AddInput from "./addInput";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListItems from "./listItems";

export default function ToDoList() {
  const workList = useSelector((state) => state.todolist.works);
  return (
    <>
      <Card
        style={{
          width: "25rem",
          margin: "auto",
          marginTop: 50,
          backgroundColor: "#b91646",
          color: "white",
        }}
      >
        <Card.Header>
          <AddInput />
        </Card.Header>

        <ListGroup variant="flush">
          {workList.map((work, index) => (
            <ListItems w={work} key={work.title} index={index} />
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
