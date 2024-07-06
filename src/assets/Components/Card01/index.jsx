import "./card.scss";

const Card01 = ({
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
            <h1>{title}</h1>
            <p>
            {content}
            </p>
            <button>Ver mais</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card01;
