import { Link } from "react-router-dom";
import styles from "@/pages/_page.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="text-center">
        <p className={styles["welcome-text"]}>Welcome To Tasky</p>
        <Link to="/users" className={styles["home-users-link"]}>
          List of users
        </Link>
      </div>
    </div>
  );
};

export default Home;
