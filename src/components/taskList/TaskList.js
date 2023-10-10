import TaskItem from "../taskItem/TaskItem";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(getTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
