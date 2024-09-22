import styles from "./ButtonSmall.module.css";

interface ButtonSmallProps {
  onClick: () => void;
  label: string;
}
const ButtonSmall = ({ onClick, label }: ButtonSmallProps) => {
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
