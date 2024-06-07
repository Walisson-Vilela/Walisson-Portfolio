import Card from "../../assets/Card";

import styles from "./portfolio.module.css";

function Portfolio() {
  return (
    <div>
      <h2>Portfólio</h2>
      <div className={styles.portfolioCarousel}>
        <div className={styles.portfolioCards}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
