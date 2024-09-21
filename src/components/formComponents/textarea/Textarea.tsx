import styles from "./Textarea.module.css";

const Textarea = ({ name, label, required, register, errors }: any) => {
  return (
    <div className={styles.formGroup}>
      <textarea
        className={styles.formField}
        name={name}
        id={name}
        placeholder=""
        {...(register && register(name))}
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
        {required && "*"}
      </label>
      {errors && errors[name] && (
        <div style={{ color: "red" }}>{errors[name]?.message}</div>
      )}
    </div>
  );
};

export default Textarea;
