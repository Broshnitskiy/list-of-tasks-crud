import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "./container/Container";
import TaskList from "./taskList/TaskList";
import styles from "./App.module.scss";

function App() {
  // const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);

  return (
    <section>
      <Container>
        <h1 className={styles.title}>Task List</h1>
        <div className={styles.addBtn}>
          {/* {users && <h2>Total users: {totalUsers} </h2>} */}
          <Button variant="primary" onClick={handleShowModal}>
            + ADD NEW TASK +
          </Button>

          <TaskList />
        </div>
      </Container>
    </section>
  );
}

export default App;
