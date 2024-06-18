import {InputText, InputEmail} from '../../assets/Inputs';
import styles from './contact.module.css';


function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.section}>
        <h2>Contatos</h2>
        <div className={styles.hr}></div>
        <div className={styles.contactArea}>
          <InputText label={'Nome Completo'} />
          <InputEmail label={'E-mail'} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
