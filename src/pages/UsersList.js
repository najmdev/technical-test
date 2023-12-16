import Pending from "@/components/Pending/Pending";
import UserListItem from "@/components/UserListItem/UserListItem";
import { useHttp } from "@/hooks/useHttp";
import { useEffect } from "react";
import styles from "@/pages/_page.module.css";

function UsersList() {
  const { pending, errors, data: users, sendRequest } = useHttp();

  useEffect(() => {
    const fetchUsers = async () => {
      sendRequest("https://jsonplaceholder.typicode.com/users/");
    };

    fetchUsers();
  }, []);

  if (pending) {
    return <Pending />;
  }

  if (errors) {
    return <p>Error: {errors.message}</p>;
  }

  return (
    <>
      <h1 className={styles["page-title"]}>Users List</h1>
      <ul className={styles["users-list"]}>
        {users &&
          users.map((user) => <UserListItem key={user.id} user={user} />)}
      </ul>
    </>
  );
}

export default UsersList;
