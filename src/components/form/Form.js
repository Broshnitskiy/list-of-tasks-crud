// import { useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComponent = ({ onSubmitTask, editingTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: editingTask ? editingTask.name : "",
      description: editingTask ? editingTask.description : "",
      status: editingTask ? editingTask.status : "Not completed",
    },
  });

  const onSubmit = (data) => {
    const newTask = {
      id: nanoid(),
      ...data,
    };
    onSubmitTask(newTask, reset);
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Task name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Task name"
          title="Name may contain only letters, apostrophe"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          title="Description may contain only letters, apostrophe"
          {...register("description", {
            required: true,
          })}
        />
        {errors.description && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Select {...register("status", { required: true })}>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
