import styles from "./ButtonSmall.module.css";
const ButtonSmall = ({ onClick, label }: any) => {
  return (
    <input
      className={styles.button}
      type="button"
      value={label}
      onClick={onClick}
    />
  );
};
export default ButtonSmall;
