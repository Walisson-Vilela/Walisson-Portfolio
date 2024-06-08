import { ButtonPrimary, ButtonSecondary } from "../../assets/Buttons";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.section}>
        <h2>Sobre mim</h2>
        <div className={styles.hr}></div>
        <div className={styles.aboutMe}>
          <p>
            Olá! Meu nome é <strong>Walisson Vilela</strong> e sou um
            Desenvolvedor <strong>Front-end</strong> e
            <strong> UI/UX Designer</strong>. Aqui está um pouco sobre mim...
          </p>
          <p>
            Com formação em Análise e Desenvolvimento de Sistemas, trago uma
            sólida bagagem de experiência de 3(três) anos como
            desenvolvedor front-end de sistemas web, com foco especial em linguagem Javascript utilizando a biblioteca
            ReactJS.
            <p>
              Ao longo da minha jornada profissional, adquiri habilidades na
              elaboração de wireframes de baixa e alta fidelidade e na
              prototipagem de produtos web e mobile utilizando Figma. Meu
              conhecimento em UI e UX design abrange desde relatórios de
              pesquisa, testes A/B, design thinking até prototipação.
            </p>
          </p>
        </div>
        <div className={styles.buttonsArea}>
          <ButtonSecondary buttonText={"Saiba mais"} />
          <ButtonPrimary buttonText={"Download CV"} />
        </div>
        {/* Direciona para curriculum  */}
      </div>
    </div>
  );
}

export default About;
