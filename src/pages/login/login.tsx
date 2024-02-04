import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import styles from "./login.module.scss";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../store/hooks";
import { loginThunk } from "../../store/thunks/auth";

export const LogInPage = () => {
  const dispatch = useDispatch();
  const { value, setValue, handleChange } = useFormData({});
  const { error, login_error_detail } = useSelector((store) => store.auth);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk({ username: value.username, password: value.password }));
    setValue({ username: "", password: "" });
  };
  return (
    <section className={styles.login}>
      <h1 className={styles.login__title}>Log in</h1>
      <form className={styles.login__form} onSubmit={handleLoginSubmit}>
        <Input
          type={"text"}
          placeholder={"Username"}
          value={value.username || ""}
          name={"username"}
          onChange={handleChange}
          required={true}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={value.password || ""}
          name={"password"}
          onChange={handleChange}
          required={true}
        />
        <Button type={"submit"} text={"Submit"} />
      </form>
      {error && <p className={styles.login__error}>{login_error_detail}</p>}
    </section>
  );
};
