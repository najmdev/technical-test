import PropTypes from "prop-types";
import { Fragment } from "react";
import Navbar from "@/components/Layout/Navbar/Navbar";
import styles from "@/components/Layout/Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={styles["layout-container"]}>{props.children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
