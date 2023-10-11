import toast from "react-hot-toast";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "./container/Container";
import Filter from "./filter/Filter";
import TaskList from "./taskList/TaskList";
import ModalComponent from "./modal/Modal";
import { getTasks } from "../redux/selectors";
import { addTask } from "../redux/tasksSlice";
import styles from "./App.module.scss";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All tasks");
  const dispatch = useDispatch();
  const allTasks = useSelector(getTasks);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const onSubmitAddTask = (newTask, reset) => {
    const isExistContact = allTasks.find(
      (task) =>
        task.name.toLocaleLowerCase() === newTask.name.toLocaleLowerCase()
    );

    if (isExistContact) {
      toast.error(`Task ${newTask.name} is already exist`);
    } else {
      dispatch(addTask(newTask));
      reset();
      handleCloseModal();
      toast.success(`New task added to list`);
    }
  };

  return (
    <section>
      <Container>
        <div className={styles.headWrapper}>
          <h1 className={styles.title}>Task List</h1>

          <Button variant="primary" onClick={handleShowModal}>
            + ADD NEW TASK +
          </Button>
        </div>

        <Filter filter={filter} setFilter={setFilter} />

        <TaskList filter={filter} />

        {showModal && (
          <ModalComponent
            show={showModal}
            handleClose={handleCloseModal}
            onSubmitTask={onSubmitAddTask}
            type="Modal for adding task"
          />
        )}
      </Container>
    </section>
  );
}

export default App;
