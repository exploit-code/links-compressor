import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
