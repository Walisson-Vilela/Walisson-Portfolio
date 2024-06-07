// Education.jsx

import styles from "./education.module.css";

function Education() {
  return (
    <div>
      <section className={styles.educationContainer}>
        <div className={styles.column}>
          <h2>Cursos e Formações</h2>
          <div className={styles.subtitleEducation}>UI/UX Designer, Desenvolvimento front-end</div>
        </div>
        <aside className={styles.column}>
          <h3>Formação Acadêmica</h3>
          <div> Estácio - Jan 2019 a Dez 2021</div>
            <div className={styles.subtitle}>Bacharelado - Análise e Desenvolvimento de Sistemas</div>
          <h3>Cursos e Certificados</h3>

         
            <div> Formação- CoderHouse - Out - 2023</div>
            <div className={styles.subtitle}>React-JS</div>

            <span>Formação - Alura - Fev 2022</span>
            <div className={styles.subtitle}>Figma</div>

            <span>Formação - Cubos Academy Set - 2022</span>
            <div className={styles.subtitle}>UI/UX Design</div>
          
        </aside>
      </section>
    </div>
  );
}

export default Education;
