import Profile from "../../assets/images/walisson.jpg";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <figure className={styles.profilePicture}>
        <img src={Profile} alt="Walisson Vilela" />
      </figure>
      <section>
        <h1>Bem-vindo ao meu Portfólio!</h1>
        <p>
          Olá! Meu nome é Walisson Vilela e sou um Desenvolvedor Front-end e
          UI/UX Designer. Aqui está um pouco sobre mim...
        </p>
        <p>
          Com formação em Análise e Desenvolvimento de Sistemas, trago uma
          sólida bagagem de experiência em infraestrutura de TI e
          desenvolvimento front-end de sistemas web, com foco especial em
          ReactJS.
          <p>
            Ao longo da minha jornada profissional, adquiri habilidades em
            análise e manipulação de bancos de dados PostgreSQL, assim como na
            elaboração de wireframes de baixa e alta fidelidade e na
            prototipagem de produtos web e mobile utilizando Figma. Meu
            conhecimento em UI e UX design abrange desde relatórios de pesquisa
            até testes A/B e design thinking.
          </p>
        </p>
        <button>Saiba mais</button>
        {/* Direciona para curriculum  */}
      </section>
    </div>
  );
}

export default About;
