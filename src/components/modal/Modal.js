import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormComponent from "../form/Form";

function ModalComponent({
  show,
  handleClose,
  onSubmitTask,
  type,
  editingTask,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent
            onSubmitTask={onSubmitTask}
            editingTask={editingTask}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
