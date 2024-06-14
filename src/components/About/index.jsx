import { ButtonPrimary, ButtonSecondary } from "../../assets/Buttons";
import PerfilImage from "../../assets/images/walisson-perfil.png";

import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.section}>
        <div className={styles.aboutMe}>
          <h2>Sobre mim</h2>
          <div className={styles.hr}></div>
          <p>
            Olá! Meu nome é <strong>Walisson Vilela</strong> e sou um
            Desenvolvedor <strong>Front-end</strong> e
            <strong> UI/UX Designer</strong>. Aqui está um pouco sobre mim...
          </p>
          <p>
            Com formação em Análise e Desenvolvimento de Sistemas, trago uma
            sólida bagagem de experiência de 3(três) anos como desenvolvedor
            front-end de sistemas web, com foco especial em linguagem Javascript
            utilizando a biblioteca ReactJS.
            <p>
              Ao longo da minha jornada profissional, adquiri habilidades na
              elaboração de wireframes de baixa e alta fidelidade e na
              prototipagem de produtos web e mobile utilizando Figma. Meu
              conhecimento em UI e UX design abrange desde relatórios de
              pesquisa, testes A/B, design thinking até prototipação.
            </p>
          </p>
          <div className={styles.buttonsArea}>
            {/* <ButtonSecondary buttonText={"Saiba mais"} /> */}
            <ButtonPrimary buttonText={"Saiba mais"} />
          </div>
        </div>
        <div className={styles.pictureArea}>
          <img className={styles.perfilImage} src={PerfilImage} />
        </div>
      </div>
    </div>
  );
}

export default About;
