import Profile from "../../assets/images/walisson-vilela.png";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.section}>
        <h5>Olá!</h5>
        <h1>
          Eu sou <span style={{ color: "rgb(73, 255, 194)" }}>Walisson</span>
        </h1>
        <h3>Freelancer, UI/UX Designer & Desenvolvedor Front-end</h3>
      </div>
      <div className={styles.picture}>
        <img src={Profile} alt="Walisson Vilela" />
      </div>
    </div>
  );
}

export default Header;
