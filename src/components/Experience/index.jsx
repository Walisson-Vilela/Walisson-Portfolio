import styles from "./experience.module.css";

function Experience() {
  return (
    <>
      <div className={styles.educationContainer}>
        <div className={styles.title}>
          <h1>Experiência Profissional</h1>
          <div className={styles.subtitleEducation}>
            UI/UX Designer, Desenvolvimento front-end
          </div>
        </div>
        
        
          <div className={styles.section}>
          <p>
          Olá! Meu nome é <strong>Walisson Vilela</strong> e sou um
          Desenvolvedor <strong>Front-end</strong> e 
          <strong> UI/UX Designer</strong>. Aqui está um pouco sobre mim...
        </p>
        <p>
          Com formação em Análise e Desenvolvimento de Sistemas, trago uma
          sólida bagagem de experiência em infraestrutura de TI e
          desenvolvimento front-end de sistemas web, com foco especial em
          ReactJS.
          </p>
          <p>
            Ao longo da minha jornada profissional, adquiri habilidades em
            análise e manipulação de bancos de dados PostgreSQL, assim como na
            elaboração de wireframes de baixa e alta fidelidade e na
            prototipagem de produtos web e mobile utilizando Figma. Meu
            conhecimento em UI e UX design abrange desde relatórios de pesquisa
            até testes A/B e design thinking.
          </p>
       
          </div>
        
        
      </div>
    </>
  );
}

export default Experience;
