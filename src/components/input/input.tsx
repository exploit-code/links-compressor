import styles from "./input.module.scss";

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  name: "username" | "password" | "link";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}
export const Input = ({ type, placeholder, value, name, onChange, required }: IInputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};
