import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.display}>
        <About />
        <hr></hr>
        <Education />
        <hr></hr>
        <Experience />
        <hr></hr>
        <Portfolio />
        <hr></hr>
        <Contact />
      </main>
    </div>
  );
}

export default Home;
