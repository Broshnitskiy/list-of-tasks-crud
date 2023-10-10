// import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
import styles from "./TaskItem.module.scss";
// import { ModalComponent } from "../modal/Modal";

const TaskItem = ({ task }) => {
  const { name, description, status } = task;
  return (
    <li className={styles.taskItem}>
      <ListGroup horizontal as="ul">
        <ListGroup.Item variant="info" as="li">
          <strong>Name:</strong>
          <p>{name}</p>
        </ListGroup.Item>
        <ListGroup.Item variant="info" as="li">
          <strong>Description:</strong>
          <p>{description}</p>
        </ListGroup.Item>
        {/* <ListGroup.Item variant="info" as="li">
          Created:
          <p>{email}</p>
        </ListGroup.Item> */}
        <ListGroup.Item variant="info" as="li">
          <strong>Status:</strong>
          <p>{status}</p>
        </ListGroup.Item>
        {/* <Button variant="warning" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="info" onClick={handleShow}>
          Edit
        </Button> */}
      </ListGroup>
      {/* <ModalComponent
        show={show}
        handleClose={handleClose}
        onSubmit={onSubmit}
        user={user}
      /> */}
    </li>
  );
};

export default TaskItem;
