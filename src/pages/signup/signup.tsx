import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../store/hooks";
import { signupThunk } from "../../store/thunks/auth";
import styles from "./signup.module.scss";
import { Navigate } from "react-router-dom";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const { error, signup, signup_error_detail } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({});

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signupThunk({ username: value.username, password: value.password }));
    setValue({ username: "", password: "" });
  };

  return signup ? (
    <Navigate to={"/login"} />
  ) : (
    <section className={styles.signup}>
      <h1 className={styles.signup__title}>Create Your Account</h1>
      <form className={styles.signup__form} onSubmit={handleSignupSubmit}>
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
      {error && <p className={styles.signup__error}>{signup_error_detail}</p>}
    </section>
  );
};
