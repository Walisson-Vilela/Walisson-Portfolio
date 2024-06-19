import React from "react";

import styles from './inputs.module.css';

export function InputText({ label, value }) {
  return (
    <div  className={styles.display} >
      <label className={styles.label} >{label}</label>
      <input type='text' className={styles.input} value={value} />
    </div>
  );
}

export function InputEmail({ label, value }) {
  return (
    <div  className={styles.display} >
      <label className={styles.label} >{label}</label>
      <input type='email' className={styles.input} value={value} />
    </div>
  );
}

export function TextArea({ label, value }) {
  return (
    <div  className={styles.display} >
      <label className={styles.label} >{label}</label>
      <textarea type='email' className={styles.textArea} value={value}/>
    </div>
  );
}
