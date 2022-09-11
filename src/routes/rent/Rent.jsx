import React from "react";
import "./rent.css";
import bannerImg from "../../images/rentBanner.webp";
import browsingImg from "../../images/browsingImg.jpg";
import data from "./data";

const Rent = () => {
  return (
    <div className="rent">
      <div className="banner">
        <div className="left">
          <h1>Discover The Perfect Place To Rent</h1>
          <p>
            See updated listings every day, search with tailored filters, and
            contact property managers—all from one place.
          </p>
        </div>
        <div className="right">
          <img src={bannerImg} alt="" />
        </div>
      </div>

      <div className="tips">
        <div className="title">
          <h1>Everything You Need to Find the Rental you'll love</h1>
          <p>
            Your Perfect home, apartament, or condo is out there. We'll Help You
            Find it.
          </p>
        </div>
        <div className="tips-container">
          <div className="left">
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Search Smarter</h1>
                <p>
                  Filter by budget, location, pet policy, and more to find
                  exactly what you’re looking for.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Compare your favorites</h1>
                <p>
                  Check out photos, review floor plans, or take a 3D tour to
                  narrow down your top choices.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Take the next step</h1>
                <p>
                  Connect with property managers to schedule a tour, ask
                  questions, or request an application.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={browsingImg} alt="" />
          </div>
        </div>
      </div>
      <div className="offers">
        {data.map((item) => (
          <div className="card">
            <img src={item.img} alt="" />
            <h1 className={item.title === "Sold" ? "sold" : "nothing"}>
              {item.title}
            </h1>
            <p>Price per month: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;
