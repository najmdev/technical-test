import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserListItem = ({ user }) => {
  return (
    <li key={user.id}>
      <Link
        to={`/user/${user.id}/tasks`}
        className="border border-sky-300 shadow-sm rounded-md px-4 py-3 block transition bg-sky-50 hover:bg-sky-100 hover:shadow-md"
      >
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-sky-700">{user.name}</p>
          <p className="text-sky-600">{user.username}</p>
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
