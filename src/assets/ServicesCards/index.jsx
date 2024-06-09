import styles from "./servicesCards.module.css";

const ServicesCard = ({
  title,
  content,
  skills,
  imageUrl,
  backgroundImageUrl,
}) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: 'rgba(10, 10, 0, 0.9)',
        zIndex: 2
      }}
    >
        
      <div className={styles.img}>
        <img src={imageUrl} alt={title} />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
      <span className={styles.subtitle}>{skills}</span>
    </div>
  );
};

export default ServicesCard;
