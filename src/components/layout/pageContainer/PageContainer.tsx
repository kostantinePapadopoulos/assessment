import styles from "./PageContainer.module.css";

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
}

const PageContainer = ({ children, title }: PageContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
export default PageContainer;
