import "./card.scss";

const Card = ({
  title,
  idRef,
  content,
  skills,
  imageUrl,
  backgroundImageUrl,
}) => {
  return (
    <>
      <div className="wrapper">
        <div className="card" id={idRef}>
          <img src={backgroundImageUrl} />
          <div className="info">
          <h1>Card Title</h1>
            <p>{content}</p>
            <button>Ver mais</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
