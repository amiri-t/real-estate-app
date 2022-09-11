import React from "react";
import "./home.css";
import bg from "../../images/bg4.jpg";
import buyImg from "../../images/buy.webp";
import sellImg from "../../images/sell.webp";
import rentImg from "../../images/rent.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={bg} alt="" className="bg" />
      <div className="home-container">
        <h1>
          Discover the Most <br /> Suitable Property
        </h1>
        <h3>Find it. Tour It. Own it.</h3>
        <button>Explore More</button>
      </div>
      <div className="options">
        <div className="cards">
          <div className="card">
            <div className="top">
              <img src={buyImg} alt="" />
            </div>
            <div className="center">
              <h1>Buy a Home</h1>
              <p>
                Find your place with an immersive photo experience and the most
                listings, including things you won’t find anywhere else.
              </p>
            </div>
            <div className="bottom">
              <Link to={"/buy-house"}>
                <button>Browser Homes</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={sellImg} alt="" />
            </div>
            <div className="center">
              <h1>Sell a Home</h1>
              <p>
                No matter what path you take to sell your home, we can help you
                navigate a successful sale.
              </p>
            </div>
            <div className="bottom">
              <Link to="/sell-house">
                <button>See Your Options</button>
              </Link>
            </div>
          </div>
          <div className="card card3">
            <div className="top">
              <img src={rentImg} alt="" />
            </div>
            <div className="center">
              <h1>Rent a Home</h1>
              <p>
                No matter what path you take to sell your home, we can help you
                navigate a successful sale.
              </p>
            </div>
            <div className="bottom">
              <Link to={"/rent-house"}>
                <button>Find Rentals</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
