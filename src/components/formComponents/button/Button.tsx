import styles from "./Button.module.css";
const Button = ({ onClick, label }: any) => {
  return (
    <input
      className={styles.button}
      type="button"
      value={label}
      onClick={onClick}
    />
  );
};
export default Button;
