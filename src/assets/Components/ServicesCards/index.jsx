import styles from "./servicesCards.module.css";

const ServicesCard = ({
  id,
  title,
  content,
  skills,
  imageUrl,
  backgroundImageUrl,
}) => {
  return (
    <div
      id={id}
      className={styles.card}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.img}>
          <img src={imageUrl} alt={title} />
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
        <span className={styles.subtitle}>{skills}</span>
      </div>
    </div>
  );
};

export default ServicesCard;
