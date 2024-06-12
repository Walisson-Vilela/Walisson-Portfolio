// import Profile from "../../assets/images/walisson-vilela.png";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <h1 className={styles.name}> Walisson Vilela </h1>
        <h3 className={styles.subtitle}>UI/UX Designer & Desenvolvedor Front-end</h3>
      </header>
    </>
  );
}

export default Header;
