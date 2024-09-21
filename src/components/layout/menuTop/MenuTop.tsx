import { Link } from "react-router-dom";
import styles from "./MenuTop.module.css";
const MenuTop = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.navLink} to="/">
        <img src="images/logos/logo.png" alt="logo" />
      </Link>
      <div className={styles.navLinks}>
        <Link className={styles.navLink} to="/products">
          Products
        </Link>

        <Link className={styles.navLink} to="/add-product">
          Add Product
        </Link>
      </div>
    </div>
  );
};
export default MenuTop;
