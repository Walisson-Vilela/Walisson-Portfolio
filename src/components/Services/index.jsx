import { ButtonPrimary, ButtonSecondary } from "../../assets/Buttons";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.section}>
        <h2>Serviços</h2>
        <div className={styles.hr}></div>
        <div className={styles.aboutMe}>
          <p>
          Serviços especializados em <strong>UI/UX design</strong>, <strong>Web Design</strong> e <strong>Desenvolvimento Front-end</strong>. 
{/*           






            Olá! Meu nome é <strong>Walisson Vilela</strong> e sou um
            Desenvolvedor <strong>Front-end</strong> e
            <strong> UI/UX Designer</strong>. Aqui está um pouco sobre mim... */}
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

export default Services;
