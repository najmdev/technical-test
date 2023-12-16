// src/components/UserTasks.js
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "@/hooks/useHttp";
import Pending from "@/components/Pending/Pending";
import styles from "@/pages/_page.module.css";
import UserTask from "@/components/UserTask/UserTask";

const UserTasks = () => {
  const { userId } = useParams();
  const { pending, errors, data: tasks, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  }, [userId]);

  if (pending) {
    return <Pending />;
  }

  if (errors) {
    return <div>Error loading tasks</div>;
  }

  return (
    <div>
      <h1 className={styles["page-title"]}>User Tasks</h1>
      <ul className={styles["tasks-list"]}>
        {tasks && tasks.map((task) => <UserTask key={task.id} task={task} />)}
      </ul>
    </div>
  );
};

export default UserTasks;
