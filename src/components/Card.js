import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const card = props.card;
  const index = props.index;

  return (
    <div key={card.id} className="col-12 col-md-8 col-lg-4 mb-2">
      <div className="card card__div mb-3">
        <div className="card-body">
          <div className="float-start col-10">
            <h5 className="card-title text-truncate">{card.name}</h5>
          </div>
          <div
            className={`float-end  ${index ? 0 : "yellow_star__div"} 
                  ${index <= 2 ? "white_star__div" : ""} 
                  ${index >= 3 ? "circle__div" : ""}`}
          >
            <span>{index + 1}</span>
          </div>
          <p className="card-text col-10 text-truncate">{card.address}</p>
          <img
            src={card.logo_image}
            alt={card.name}
            className="card-img-top"
            style={{ height: "150px" }}
          ></img>
          <p className="card-text mt-2 text-truncate">{card.catch}</p>
          <div className="float-end">
            <button className="pink__btn btn" style={{ textAlign: "" }}>
              <Link
                className="link"
                to={{
                  pathname: `/card/${card.id}`,
                }}
              >
                Find Out More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
