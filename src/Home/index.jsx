import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import styles from "./home.module.css";

function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <div>
      <Navbar
        aboutRef={aboutRef}
        educationRef={servicesRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <main className={styles.display} id="particles-container">
        <Header />
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="about" ref={servicesRef}>
          <Work />
        </div>
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
