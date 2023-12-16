import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import styles from "@/components/Layout/Navbar/Navbar.module.css";
import navigationLinks from "@/config/routes.json";

const Header = () => {
  const { routes } = navigationLinks;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles["bg-primary"]}>
      <div
        className={`${styles["bg-primary"]} ${styles["container"]} ${styles["nav-container"]}`}
      >
        {/* Logo */}
        <span className={styles["nav-logo"]}>
          <ClipboardDocumentCheckIcon className={styles["nav-logo-icon"]} />
          <span>Tasky</span>
        </span>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className={styles["nav-toggler"]}>
          <button
            onClick={toggleMobileMenu}
            className={styles["nav-toggler-btn"]}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className={styles["nav-hamburger-size"]} />
            ) : (
              <Bars3Icon className={styles["nav-hamburger-size"]} />
            )}
          </button>
        </div>
        {/* Navigation Links (Desktop) */}
        <div className={styles["nav-links-container"]}>
          {routes.map((route) => (
            <Link key={route.path} to={route.path} className="text-white">
              {route.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${styles["bg-primary"]} ${styles["mobile-navigation"]} ${
          mobileMenuOpen
            ? styles["mobile-navigation-opened"]
            : styles["mobile-navigation-closed"]
        }`}
        style={{ zIndex: 10 }}
      >
        <div className={styles["mobile-container"]}>
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="text-white block py-2"
              onClick={toggleMobileMenu}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
