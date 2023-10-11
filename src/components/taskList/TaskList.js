import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../taskItem/TaskItem";
import ModalComponent from "../modal/Modal";
import { getTasks } from "../../redux/selectors";
import { editTask } from "../../redux/tasksSlice";
import toast from "react-hot-toast";

const TaskList = ({ filter }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const normalizedFilter = filter.toLowerCase();
  const findTasks = tasks.filter(
    (task) => task.status.toLowerCase() === normalizedFilter
  );
  const renderTasks = filter === "All tasks" ? tasks : findTasks;

  const [show, setShow] = useState(false);
  const [editingTask, setEditingTask] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (task) => {
    setShow(true);
    setEditingTask(task);
  };

  const onSubmitEditModal = (updatedTask, resetInput) => {
    const noChanges =
      updatedTask.name === editingTask.name &&
      updatedTask.descriptin === editingTask.descriptin &&
      updatedTask.status === editingTask.status;

    if (noChanges) {
      toast.error(
        `You didn't change anything! Edit current fields and press submit button.`
      );
      return;
    }

    dispatch(editTask({ id: editingTask.id, updatedTask }));
    resetInput();
    handleClose();
    toast.success(`Task updated`);
  };

  return renderTasks?.length === 0 ? (
    <p>No saved tasks</p>
  ) : (
    <>
      <ul>
        {renderTasks.map((task) => (
          <TaskItem key={task.id} task={task} handleShow={handleShow} />
        ))}
      </ul>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        onSubmitTask={onSubmitEditModal}
        type="Modal for editing task"
        editingTask={editingTask}
      />
    </>
  );
};

export default TaskList;
