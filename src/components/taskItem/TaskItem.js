import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task, handleShow }) => {
  const { id, name, description, status } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
    toast.success(`Task was deleted successfully`);
  };

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

        <ListGroup.Item variant="info" as="li">
          <strong>Status:</strong>
          <p>{status}</p>
        </ListGroup.Item>

        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            handleShow(task);
          }}
        >
          Edit task
        </Button>
      </ListGroup>
    </li>
  );
};

export default TaskItem;
