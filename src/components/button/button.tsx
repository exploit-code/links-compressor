import styles from "./button.module.scss";

interface IButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
}
export const Button = ({ type, text }: IButtonProps) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};
