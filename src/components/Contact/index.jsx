import { ButtonPrimary } from "../../assets/Components/Buttons";

import {
  InputText,
  InputEmail,
  TextArea,
} from "../../assets/Components/Inputs";
import "./contact.scss";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="social-container">
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Walisson-Vilela" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/walissonvilela/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/walissonvilela/" target="_blank">
              <i className="fa fa-paper-plane-o"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
