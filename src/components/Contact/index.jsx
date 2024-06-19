import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { ButtonPrimary } from "../../assets/Components/Buttons";

import {
  InputText,
  InputEmail,
  TextArea,
} from "../../assets/Components/Inputs";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.section}>
        {/* <h2>Contatos</h2>
        <div className={styles.hr}></div> */}
        {/* <div>
          <div className={styles.contactArea}>
            <InputText label={"Nome Completo"} />
            <InputEmail label={"E-mail"} />
            <InputText label={"Telefone"} />
          </div>
          <TextArea label={"Mensagem"} />
        </div>
        <div className={styles.buttonArea}>
          <ButtonPrimary buttonText={"Enviar"} />
        </div> */}
        <div className={styles.iconsArea}>
          <GithubOutlined
            style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "38px", margin: '0 10px', cursor: 'pointer' }}
          />
          <LinkedinOutlined
            style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "38px", margin: '0 10px', cursor: 'pointer' }}
          />
          <MailOutlined
            style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "38px", margin: '0 10px', cursor: 'pointer' }}
          />
          <WhatsAppOutlined
            style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "38px", margin: '0 10px', cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
