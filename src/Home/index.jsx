import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import styles from "./home.module.css";

function Home() {
 

  return (
    <div>
      <Navbar />
      <main className={styles.display} id="particles-container">
        <Header />
        <About />
        <Work />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
