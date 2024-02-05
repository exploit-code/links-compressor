import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { useDispatch, useSelector } from "../../store/hooks";
import { logoutAction } from "../../store/actions/auth";

export const Header = () => {
  const dispatch = useDispatch();
  const { authorized } = useSelector((store) => store.auth);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className={styles.header}>
      {authorized ? (
        <>
          <NavLink to={"/"} className={styles.header__link_wrap}>
            {({ isActive }) => (
              <span className={isActive ? styles.header__link_active : styles.header__link}>
                Home
              </span>
            )}
          </NavLink>

          <button className={styles.header__button} onClick={handleLogout}>
            Log out
          </button>
        </>
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
