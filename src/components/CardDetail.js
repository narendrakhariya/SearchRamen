import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const API_URL = `/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_KEY}&format=json`;

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);

  const getCard = async () => {
    await fetch(API_URL + `&id=${id}`)
      .then((response) => response.json())
      .then((data) => setCard(data.results.shop))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="card bg-dark text-white align-items-center">
      {card.map((card) => (
        <div
          key={card.id}
          className="card-body card__div col-12 col-md-8 col-lg-6 m-1"
        >
          <div className="card-title">
            <h4>{card.name}</h4>
          </div>
          <p className="card-text">{card.address}</p>
          <img
            src={card.photo.pc.l}
            alt={card.name}
            className="card-img-top img-responsive"
          ></img>
          <p className="card-text mt-2">{card.catch}</p>
          <p className="card-text">
            <b>Website: </b>
            <a href={card.urls.pc} target="_blank" rel="noreferrer">
              {card.urls.pc}
            </a>
          </p>
          <p className="card-text">
            <b>Open: </b>
            {card.open}
          </p>
          <p className="card-text">
            <b>Close: </b>
            {card.close}
          </p>
          <div className="float-end">
            <button className="pink__btn btn">
              <Link className="link" to="/">
                Go Home
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
