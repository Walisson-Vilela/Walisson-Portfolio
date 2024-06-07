import styles from "./education.module.css";

function Education() {
  const academy = [
    {
      name: "Estácio",
      date: "Jan 2019 a Dez 2021",
      degree: "Bacharelado - Análise e Desenvolvimento de Sistemas",
    },
  ];

  const courses = [
    {
      name: "Formação - CoderHouse",
      date: "Out - 2023",
      subject: "React-JS",
    },
    {
      name: "Curso - Mergo User Experience",
      date: "Ago - 2023",
      subject: "Interface Visual",
    },
    {
      name: "Formação - Alura",
      date: "Fev 2022",
      subject: "Figma",
    },
    {
      name: "Formação - Cubos Academy",
      date: "Set - 2022",
      subject: "UI/UX Design",
    },
  ];

  return (
    <div>
      <div className={styles.educationContainer}>
        <div className={styles.title}>
          <h1>Cursos & Formações</h1>
          <div className={styles.subtitleEducation}>
            UI/UX Designer, Desenvolvimento front-end
          </div>
        </div>
        <div>
        <div className={styles.section}>
            <h2>Formação Acadêmica</h2>
            {academy.map((item, index) => (
              <div key={index}>
                <div style={{display: 'flex'}}>
                  <div className={styles.list}></div>
                  <span>
                    {item.name} - {item.date}
                  </span>
                </div>
                <div className={styles.subtitle}>{item.degree}</div>
              </div>
            ))}
          </div>
          <div className={styles.section}>
            <h2>Cursos e Certificados</h2>
            {courses.map((item, index) => (
              <div key={index}>
                <div style={{display: 'flex'}}>
                  <div className={styles.list}></div>
                  <span>
                    {item.name} - {item.date}
                  </span>
                </div>
                <div className={styles.subtitle}>{item.subject}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

  );
}

export default Education;
