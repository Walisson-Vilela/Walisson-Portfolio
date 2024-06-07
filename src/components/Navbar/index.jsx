import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>
        <Link to="/">Walisson Vilela</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/about">Sobre Mim</Link></li>
        <li><Link to="/education">Formação</Link></li>
        <li><Link to="/portfolio">Portfólio</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/curriculum">Curriculo</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;