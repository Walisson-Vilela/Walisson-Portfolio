import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav>
      {/* <div className={styles.logo}>
        <Link to="/">WalissonVilela<span style={{ color: 'rgb(73, 255, 194)', fontWeight: 900, fontSize: '3rem'}}>.</span></Link>
      </div> */}
      <ul className={styles.navLinks}>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/education">Serviços</Link></li>
        <li><Link to="/portfolio">Portfólio</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;