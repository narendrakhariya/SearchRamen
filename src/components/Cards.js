import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const cardData = props.cardData;

  return (
    <div className="py-2 container">
      <div className="row justify-content-center" style={{ textAlign: "left" }}>
        {cardData.length == 0 ? (
          <div className="text-center text-info">
            <b>Sorry, no results found!</b>
          </div>
        ) : (
          cardData.map((card, index) => {
            return <Card key={card.id} card={card} index={index}></Card>;
          })
        )}
      </div>
    </div>
  );
};

export default Cards;
