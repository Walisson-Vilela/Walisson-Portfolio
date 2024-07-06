import "./card.scss";

const Card01 = () => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div className="info">
            <h1>Mountain</h1>
            <p>
              Big, tall mountains look really cool and make nature super
              awesome!
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card01;
