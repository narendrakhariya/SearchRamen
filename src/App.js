import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

const API_URL = `/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_KEY}&format=json&count=12&order=4`;

const App = () => {
  const [cardData, setCardData] = useState([]);
  //Param: Deafult area Tokyo:Z011
  const getCards = async (url_param = `&large_area=Z011`) => {
    await fetch(API_URL + url_param)
      .then((response) => response.json())
      .then((data) => setCardData(data.results.shop))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCards();
  }, []);

  const searchCard = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      getCards(`&keyword=${keyword}`);
    } else {
      getCards(); //Deafult area Tokyo:Z011
    }
  };

  return (
    <div className="App bg-dark text-white text-center">
      <header className="App-header">
        <h1>TOKYO RAMEN FINDER</h1>
        <img alt="logo" src={process.env.PUBLIC_URL + "/RamenLogo.png"}></img>
      </header>
      <Search searchCard={searchCard} cardData={cardData} />
    </div>
  );
};

export default App;
