import ServicesCard from "../../assets/Components/ServicesCards";

import UiPicture from '../../assets/images/ui.png';
import UxPicture from '../../assets/images/ux.png';
import webPicture from '../../assets/images/web-development.png';
import UiBackground from '../../assets/images/uiBackground.png';
import UxBackground from '../../assets/images/uxBackground.jpg';
import DevBackground from '../../assets/images/devBackground.jpg';

import styles from "./work.module.css";

function Work() {
  const cardsData = [
    {
      title: "UI Design",
      id: 'ux',
      content: "Criação de interfaces digitais intuitivas e esteticamente agradáveis para melhorar a experiência do usuário.",
      skills:"Testes A/B, Figma, AdobeXD",
      imageUrl: UiPicture,
      backgroundImageUrl: UiBackground,
    },
    {
      title: "UX Design",
      id: 'frontEnd',
      content: "Soluções eficazes e intuitivas para produtos digitais, focando na usabilidade, acessibilidade e satisfação do usuário.",
      skills:"UX Research, Design Thinking, Double Diamond",
      imageUrl: UxPicture,
      backgroundImageUrl: UxBackground,
    },
    {
      title: "Desenvolvimento Front-End",
      id: 'webDesign',
      content: "Desenvolvimento de sites e sistemas web",
      skills:"HTML, CSS, Javascript, ReactJS",
      imageUrl: webPicture,
      backgroundImageUrl:DevBackground,
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.section}>
        <h2>Serviços</h2>
        <div className={styles.hr}></div>
        <div className={styles.aboutMe}>
          <p>
            Serviços especializados em <strong>UI/UX design</strong>,{" "}
            <strong>Web Design</strong> e{" "}
            <strong>Desenvolvimento Front-end</strong>.
          </p>
        </div>
        <div className={styles.cardsArea}>
          <div className={styles.cards}>
            {cardsData.map((card, index) => (
              <ServicesCard
                key={index}
                id={card.id}
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

export default Work;
