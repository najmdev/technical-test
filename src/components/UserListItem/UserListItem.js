import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "@/components/UserListItem/UserListItem.module.css";
const UserListItem = ({ user }) => {
  return (
    <li>
      <Link to={`/user/${user.id}/tasks`} className={styles["users-list-item"]}>
        <div className={styles["users-list-item-top"]}>
          <p className={styles["users-list-item-name"]}>{user.name}</p>
          <p className={styles["users-list-item-username"]}>@{user.username}</p>
        </div>
        <p>Email : {user.email}</p>
      </Link>
    </li>
  );
};

UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserListItem;
