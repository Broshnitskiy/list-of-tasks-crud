import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComponent = ({ onSubmitUser, task }) => {
  // const [firstName, setFirstName] = useState(
  //   user?.firstName ? user.firstName : ""
  // );
  // const [lastName, setLastName] = useState(user?.lastName ? user.lastName : "");
  // const [number, setNumber] = useState(user?.number ? user.number : "");
  // const [email, setEmail] = useState(user?.email ? user.email : "");
  // const [date, setDate] = useState(user?.date ? user.date : "");

  // const resetInput = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setNumber("");
  //   setDate("");
  // };

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case "firstName":
  //       setFirstName(e.target.value.trim());
  //       break;
  //     case "lastName":
  //       setLastName(e.target.value.trim());
  //       break;
  //     case "number":
  //       setNumber(e.target.value);
  //       break;
  //     case "email":
  //       setEmail(e.target.value.toLocaleLowerCase().trim());
  //       break;
  //     case "date":
  //       setDate(e.target.value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     firstName,
  //     lastName,
  //     number,
  //     email,
  //     date,
  //   };

  //   onSubmitUser(newUser, resetInput);
  // };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label> First name</Form.Label>
        <Form.Control
          type="text"
          name="newUserame"
          value={name}
          onChange={handleChange}
          placeholder="Task name"
          pattern="^[A-Za-zА-Яа-я' -]+$"
          title="Name may contain only letters, apostrophe"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          pattern="^[A-Za-zА-Яа-я' -]+$"
          title="Name may contain only letters, apostrophe"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Your birthday</Form.Label>
        <Form.Control
          type="date"
          name="date"
          onChange={handleChange}
          value={date}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
