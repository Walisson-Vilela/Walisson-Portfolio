// import Card from "../../assets/Card";

import ServicesCard from "../../assets/ServicesCards";
import styles from "./portfolio.module.css";

import UiPicture from "../../assets/images/ui.png";
import UxPicture from "../../assets/images/ux.png";
import webPicture from "../../assets/images/web-development.png";
import UiBackground from "../../assets/images/uiBackground.png";
import UxBackground from "../../assets/images/uxBackground.jpg";
import DevBackground from "../../assets/images/devBackground.jpg";

const cardsData = [
  {
    title: "UI Design",
    content:
      "Criação de interfaces digitais intuitivas e esteticamente agradáveis para melhorar a experiência do usuário.",
    skills: "Testes A/B, Figma, AdobeXD",
    imageUrl: UiPicture,
    backgroundImageUrl: UiBackground,
  },
  {
    title: "UX Design",
    content:
      "Soluções eficazes e intuitivas para produtos digitais, focando na usabilidade, acessibilidade e satisfação do usuário.",
    skills: "UX Research, Design Thinking, Double Diamond",
    imageUrl: UxPicture,
    backgroundImageUrl: UxBackground,
  },
  {
    title: "Desenvolvimento Front-End",
    content: "Desenvolvimento de sites e sistemas web",
    skills: "HTML, CSS, Javascript, ReactJS",
    imageUrl: webPicture,
    backgroundImageUrl: DevBackground,
  },
];
function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.mainSection}>
        <div className={styles.section}>
          <h2>Portfólio</h2>
          <div className={styles.hr}></div>
          <div className={styles.textSection}>
            <p>
              Nessa sessão, está alguns trabalhos e projetos executados.
              <strong>Web Design</strong> e{" "}
              <strong>Desenvolvimento Front-end</strong>.
            </p>
          </div>
        </div>
        <div className={styles.cardsArea}>
          <div className={styles.cards}>
            {cardsData.map((card, index) => (
              <ServicesCard
                key={index}
                title={card.title}
                content={card.content}
                skills={card.skills}
                imageUrl={card.imageUrl}
                backgroundImageUrl={card.backgroundImageUrl}
              />
            ))}
          </div>
        </div>
        <div className={styles.cardsArea} style={{marginTop: '5%'}}>
          <div className={styles.cards}>
            {cardsData.map((card, index) => (
              <ServicesCard
                key={index}
                title={card.title}
                content={card.content}
                skills={card.skills}
                imageUrl={card.imageUrl}
                backgroundImageUrl={card.backgroundImageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

// <div>
//   <h2>Portfólio</h2>
//   <div className={styles.portfolioCarousel}>
//     <div className={styles.portfolioCards}>
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   </div>
// </div>
