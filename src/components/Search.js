import React from "react";
import Cards from "./Cards";

const Search = (props) => {
  return (
    <div>
      <div style={{ display: "inline-block", width: "35%" }}>
        <input
          className="form-control mb-2"
          type="text"
          name="searchTxt"
          onChange={props.searchCard}
          placeholder="Filter by speciality, location or keyword.. "
          style={{
            backgroundColor: "#181717",
            border: "none",
            color: "inherit",
            fontSize: "inherit",
          }}
        ></input>
      </div>
      <div className="mt-2">
        <p>Displaying the top {props.cardData.length} out of 2,500 results</p>
      </div>
      <Cards cardData={props.cardData}></Cards>
    </div>
  );
};

export default Search;
