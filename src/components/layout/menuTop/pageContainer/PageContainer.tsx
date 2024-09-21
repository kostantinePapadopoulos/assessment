import styles from "./PageContainer.module.css";

const PageContainer = ({ children, title }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
export default PageContainer;
