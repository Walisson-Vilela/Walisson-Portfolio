import styles from './buttons.module.css';

export function ButtonPrimary({buttonText}) {
    return (
        <button className={styles.primary}>
            {buttonText.toUpperCase()}
        </button>
    );
}
export function ButtonSecondary({buttonText}) {
    return (
        <button className={styles.secondary}>
            {buttonText}
        </button>
    );
}

