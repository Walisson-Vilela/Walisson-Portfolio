import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

function Navbar() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a onClick={() => handleScroll('about')}>
            Sobre
          </a>
        </li>
        <li>
          <a  onClick={() => handleScroll('services')}>
            Serviços
          </a>
        </li>
        <li>
          <Link onClick={() => handleScroll('portfolio')}>
            Portfólio
          </Link>
        </li>
        <li>
          <Link onClick={() => handleScroll('contact')}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
