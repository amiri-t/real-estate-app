import React, { useState } from "react";
import "./sell.css";
import { Link } from "react-router-dom";
import bannerPic from "../../images/sell-banner.jpg";
import sellGuide1 from "../../images/sell-guide.svg";
import sellGuide2 from "../../images/sell-guide2.svg";
import sellGuide3 from "../../images/sell-guide3.svg";
import houseForSale from "../../images/house-for-sale.png";
import { BsImageFill } from "react-icons/bs";

const Sell = () => {
  const [file, setFile] = useState("");
  return (
    <div className="sell">
      <div className="banner">
        <div className="left">
          <h1>Sell Your House The Way You Want</h1>
          <p>Put your house on sale and just wait for buyers</p>
          <Link to="/buy-house">
            <button>Explore Deals</button>
          </Link>
        </div>
        <div className="right">
          <img src={bannerPic} alt="" />
        </div>
      </div>
      <div className="help">
        <div className="title">Seller Guides</div>
        <div className="cards">
          <Link to={"/how-to-sell"} className="help-nav-link">
            <div className="card">
              <img src={sellGuide1} alt="" />
              <h3>How Should I Sell My Home?</h3>
            </div>
          </Link>
          <Link to={"/how-much-is-worth"} className="help-nav-link">
            <div className="card">
              <img src={sellGuide2} alt="" />
              <h3>How Much is My House Worth?</h3>
            </div>
          </Link>
          <Link to={"/how-to-prepare"} className="help-nav-link">
            <div className="card">
              <img src={sellGuide3} alt="" />
              <h3>How To Prepare Your Home For Sale?</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="how-it-works">
        <div className="title">
          <h1>How it Works</h1>
          <p>
            When you sell with a Redfin Agent, we’re with you every step of the
            way.
          </p>
        </div>
        <div className="bottom">
          <div className="rows">
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Get expert pricing advice</h1>
                <p>
                  You’ll meet with your Redfin Agent to discuss your goals,
                  review your Home Value Report, and get help setting the right
                  price.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Your home makes its debut</h1>
                <p>
                  Your home goes on the market and you can track views,
                  favorites, and tours in the Owner Dashboard.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Prep, stage, and list</h1>
                <p>
                  Once your home is prepped, we’ll take professional photos, put
                  up a yard sign, and print flyers.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="line"></div>
              <div className="content">
                <h1>Review offers with your agent</h1>
                <p>
                  Because Redfin Agents close 2x more deals, your agent has the
                  experience to negotiate the best offer for you.
                </p>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={houseForSale} alt="" />
          </div>
        </div>
      </div>
      <div className="form">
        <div className="left">
          <div className="img">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <label htmlFor="file">
              Select Image: <BsImageFill className="icon" />
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
        <div className="right">
          <div className="left-inputs">
            <input type="text" placeholder="Address" />
            <input type="email" placeholder="Email Address" />
            <input type="phone" placeholder="Phone Number" />
          </div>
          <div className="right-inputs">
            <input type="text" placeholder="Seller's Full Name" />
            <input type="number" placeholder="Price in US Dollars" />
            <button type="submit">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
