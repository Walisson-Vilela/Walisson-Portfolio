import Header from "../components/Header";
import About from '../components/About';
import Contact from "../components/Contact";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.display}>
        <Header />

        <About />
        {/* <Education /> */}

        <Services />

        <Portfolio />

        <Contact />
      </main>
    </div>
  );
}

export default Home;
