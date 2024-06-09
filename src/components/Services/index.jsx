import ServicesCard from "../../assets/ServicesCards";

import UiPicture from '../../assets/images/ui.png';
import UiBackground from '../../assets/images/uiBackground.png';

import styles from "./services.module.css";

function Services() {
  const cardsData = [
    {
      title: "UI Design",
      content: "Criação de interfaces digitais intuitivas e esteticamente agradáveis para melhorar a experiência do usuário.",
      skills:"Figma, AdobeXD",
      imageUrl: UiPicture,
      backgroundImageUrl: UiBackground,
    },
    {
      title: "Card 2",
      content: "Conteúdo do Card 2",
      skills:"Figma, AdobeXD",
      imageUrl: "url_da_sua_imagem_2.jpg",
      backgroundImageUrl: "url_da_sua_imagem_de_fundo_2.jpg",
    },
    {
      title: "Card 3",
      content: "Conteúdo do Card 3",
      skills:"Figma, AdobeXD",
      imageUrl: "url_da_sua_imagem_3.jpg",
      backgroundImageUrl: "url_da_sua_imagem_de_fundo_3.jpg",
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

export default Services;
