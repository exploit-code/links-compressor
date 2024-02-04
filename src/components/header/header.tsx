import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { useSelector } from "../../store/hooks";

export const Header = () => {
  const { authorized } = useSelector((store) => store.auth);

  return (
    <header className={styles.header}>
      {authorized ? (
        <NavLink to={"/"} className={styles.header__link_wrap}>
          {({ isActive }) => (
            <span className={isActive ? styles.header__link_active : styles.header__link}>
              Home
            </span>
          )}
        </NavLink>
      ) : (
        <>
          <NavLink to={"/login"} className={styles.header__link_wrap}>
            {({ isActive }) => (
              <span className={isActive ? styles.header__link_active : styles.header__link}>
                Login
              </span>
            )}
          </NavLink>
          <NavLink to={"/signup"} className={styles.header__link_wrap}>
            {({ isActive }) => (
              <span className={isActive ? styles.header__link_active : styles.header__link}>
                Register
              </span>
            )}
          </NavLink>
        </>
      )}
    </header>
  );
};
