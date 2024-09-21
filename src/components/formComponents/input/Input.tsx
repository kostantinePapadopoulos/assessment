import styles from "./Input.module.css";
const Input = ({ name, label, required, register, errors }: any) => {
  return (
    <div className={styles.formGroup}>
      <input
        type="input"
        className={styles.formField}
        name={name}
        id={name}
        {...(register && register(name))}
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
        {/* {required && "*"} */}
      </label>
      {errors && errors[name] && (
        <div style={{ color: "red" }}>{errors && errors[name]?.message}</div>
      )}
    </div>
  );
};
export default Input;
