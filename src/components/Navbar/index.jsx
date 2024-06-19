import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar({ aboutRef, servicesRef, portfolioRef, contactRef }) {
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/about" onClick={() => scrollToRef(aboutRef)}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => scrollToRef(servicesRef)}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => scrollToRef(portfolioRef)}>
            Portfólio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => scrollToRef(contactRef)}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
