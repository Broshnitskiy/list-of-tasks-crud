import Form from "react-bootstrap/Form";
import styles from "./Filter.module.scss";

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.formWrapper}>
      <Form.Group className="mb-3" controlId="status">
        <Form.Select value={filter} onChange={handleChange}>
          <option value="All tasks">All tasks</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default Filter;
