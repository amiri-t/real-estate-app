import React from "react";
import "./buy.css";
import bannerpic from "../../images/buy-banner.jpg";
import data from "./items";

const Buy = () => {
  return (
    <div className="buy">
      <div className="banner">
        <div className="left">
          <h1>Let's find the right option for you</h1>
          <p>Explore selling offers and find what best for you</p>
          <button>Start Exploring</button>
        </div>
        <div className="right">
          <img src={bannerpic} alt="" />
        </div>
      </div>
      <div className="offers">
        {data.map((item) => (
          <div className="card">
            <img src={item.img} alt="" />
            <h1 className={item.title === "Sold" ? "sold" : "nothing"}>
              {item.title}
            </h1>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
