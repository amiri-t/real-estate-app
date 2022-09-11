import React from "react";
import "./helppage.css";
import { Link } from "react-router-dom";

const HelpPage1 = () => {
  return (
    <div className="help1">
      <div className="paragraph">
        <div className="title">
          <h1>How should I sell my home?</h1>
        </div>
        <p>
          Today, there are many ways to sell a house, and the best option for
          you will depend on your unique circumstances. To help you figure out
          the best selling method for you, here’s a rundown of your options, as
          well as the pros and cons of each.
        </p>
        <p>
          <b>List with a real estate agent.</b> Hiring a real estate agent or
          broker to sell your home is the tried-and-true method that tends to
          net the highest profit. An agent can create a custom marketing plan,
          get the word out to many buyers, and assist you through the entire
          home-selling process. While you pay a commission for an agent’s
          services (often a percentage of your home’s sales price), it may be
          money well-spent since listing with an agent can help you fetch a high
          price for your home. Here’s in your area who can help.
        </p>
        <p>
          <b>Sell to an iBuyer. </b> An iBuyer is a company with the financial
          means to purchase your home in cash. While their offers are generally
          competitive (based on the sales price of similar properties in your
          area), the price may not be as high as what you’d get on the open
          market with a real estate agent’s expertise. Still, the speed,
          convenience, and control you gain from an iBuyer may be worth every
          penny, as it allows you to consider the following options:
        </p>
        <li>
          Sell fast and with ease. If you need to sell quickly to move for a new
          job or other reason, an iBuyer allows you to skip the lengthy process
          of prepping and listing your home for sale. iBuying transactions can
          happen entirely online, and in a matter of days.
        </li>
        <li>
          Sell now, move later. While iBuying transactions can happen quickly,
          you can also take longer and choose your closing date, which is
          helpful if you want to avoid moving twice. An iBuyer may allow you to
          stay in your current home until you buy a new home and are ready to
          move.
        </li>
        <li>
          Buy now, sell later. See a new home you want to buy right now, but
          can’t afford to float two mortgages at once? An iBuyer may enable you
          to make a competitive offer on a new home that’s not contingent on the
          sale of your current home, or even whether it’s listed yet.
        </li>
        <li>
          Sell in any condition. If your property is damaged, run-down, or
          facing foreclosure, an iBuyer may be willing to buy your home as is,
          offloading the burden of making repairs or renovations.
        </li>
      </div>
      <div className="other-guides">
        <h1>Other Seller Guides</h1>
        <div className="guides">
          <p>How Shoud I Sell My Home?</p>
          <Link to="/how-much-is-worth">
            <p>How Much is My House Worth?</p>
          </Link>
          <p>How To Prepare Your Home For Sale?</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage1;
