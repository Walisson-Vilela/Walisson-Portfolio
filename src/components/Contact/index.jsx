import styles from './contact.module.css';


function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.section}>
        <h2>Contatos</h2>
        <div className={styles.hr}></div>
        <div className={styles.contactArea}>
          {/* <p>
            Entre em contato através dos links abaixo
          </p> */}
        </div>
      </div>
    </div>



    // <div>
    //   <h1>Entre em Contato</h1>
    //   <p>Você pode me contatar através do seguinte:</p>
    //   <ul>
    //     <li>Email: seuemail@example.com</li>
    //     <li>Telefone: (00) 1234-5678</li>
    //   </ul>
    // </div>
  );
}

export default Contact;
