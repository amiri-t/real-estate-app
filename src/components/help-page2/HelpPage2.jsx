import React from "react";
import "./helppage2.css";
import { Link } from "react-router-dom";

const HelpPage2 = () => {
  return (
    <div className="help2">
      <div className="paragraph">
        <div className="title">
          <h1>How much is my home worth?</h1>
        </div>
        <p>
          Figuring out how much your home is worth is important if you hope to
          get a good price when you sell. While you might have a certain dollar
          figure in mind—based on what you paid originally, plus a little extra
          since real estate tends to appreciate—your home’s actual value could
          be lower or much higher based on your local housing market, the
          condition of your home, and other factors. Not sure where to start?
          has a variety of tools and advice to help you figure out how much your
          house is worth.
        </p>
        <p>
          <b>Check out comps.</b> The best way to assess your home’s value is to
          learn the sales prices of similar properties in your neighborhood,
          otherwise known as “comparables” or “comps.” For example, if a home
          near yours with the same square footage and numbers of bedrooms and
          bathrooms recently sold for $250,000, your own home’s value is likely
          in that ballpark. The more comps you check, the more accurately you
          can pinpoint your own home’s price. One great place to start is to
          type your address into the Realtor.com , which will estimate your
          property’s sales price based on an algorithm that factors in similar
          properties in your area.
        </p>
        <p>
          <b>Consult a real estate agent. </b> While comps are a great way to
          get a general sense of your home’s value, you can fine tune this
          number by consulting a real estate agent. These professionals can
          visit your property, assess its unique strengths and weaknesses, then
          present a comparative market analysis (or CMA) estimating your home’s
          price based on recent real estate sales in your area. Here’s who can
          help.
        </p>
        <p>
          <b>Get an offer from an iBuyer.</b> One useful tool to help with home
          valuation is to see what people are willing to pay for your home,
          which can be done at the . You simply type in your address to receive
          an estimated home value—and from there, you can include additional
          details (such as your home’s condition and number of bedrooms and
          bathrooms) to receive offers from companies who may be interested in
          buying your home, as well as estimated price ranges they’d pay. At
          that point, you can decide whether or not to inquire further with
          these companies, or just use the information provided to get a better
          sense of how much your home is worth.
        </p>
      </div>
      <div className="other-guides">
        <h1>Other Seller Guides</h1>
        <div className="guides">
          <Link to="/how-to-sell">
            <p>How Shoud I Sell My Home?</p>
          </Link>
          <p>How Much is My House Worth?</p>
          <Link to={"/how-to-prepare"}>
            <p>How To Prepare Your Home For Sale?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage2;
