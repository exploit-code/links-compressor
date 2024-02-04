import styles from "./home.module.scss";
import { Input } from "../../components/input/input";
import { useFormData } from "../../hooks/useFormData";
import { Button } from "../../components/button/button";
import { useDispatch, useSelector } from "../../store/hooks";
import { squeezeThunk } from "../../store/thunks/squeeze";
import { Table } from "../../components/table/table";
import { useEffect } from "react";
import { statisticsThunk } from "../../store/thunks/statistics";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { value, setValue, handleChange } = useFormData({});
  const { squeeze, error } = useSelector((store) => store.squeeze);

  const handleLinkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(squeezeThunk({ target: value.link }));
    setValue({ link: "" });
  };

  useEffect(() => {
    dispatch(statisticsThunk());
  }, [dispatch, squeeze]);

  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>Links Compressor</h1>
      <form className={styles.home__form} onSubmit={handleLinkSubmit}>
        <Input
          type={"text"}
          placeholder={"Your link"}
          value={value.link || ""}
          name={"link"}
          onChange={handleChange}
          required={true}
        />
        <Button type={"submit"} text={"Compress"} />

        {error && <p className={styles.home__error}>Error</p>}
      </form>

      <Table />
    </section>
  );
};
