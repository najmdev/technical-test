import PropTypes from "prop-types";
import styles from "@/components/UserTask/UserTask.module.css";
const UserTask = ({ task }) => {
  return (
    <li className={styles["task"]}>
      <span className={styles["task-title"]}>{task.title}</span>
      <span
        className={`${styles["task-status"]} ${
          task.completed ? styles["task-completed"] : styles["task-incomplete"]
        }`}
      >
        {task.completed ? "completed" : "incomplete"}
      </span>
    </li>
  );
};

UserTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserTask;
