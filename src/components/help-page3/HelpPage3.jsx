import React from "react";
import "./helppage3.css";
import { Link } from "react-router-dom";

const HelpPage3 = () => {
  return (
    <div className="help3">
      <div className="paragraph">
        <div className="title">
          <h1>How to prepare your home for sale?</h1>
        </div>
        <p>
          If you’re getting ready to sell your house, you may want to make some
          repairs and upgrades so your property makes a great impression on
          buyers. Here are some things to consider when trying to prepare a home
          for sale so it fetches top dollar.
        </p>
        <p>
          <b>Gather your paperwork. </b> No matter how great your home looks at
          first glance, savvy buyers will want to know how old items are. Check
          your home records, receipts, or seller’s disclosures for the age or
          last repair of things like your roof, HVAC system, water heater, and
          gutters. You’ll also want to check how long these features are
          supposed to last. A central air-conditioning unit, for instance,
          typically lasts about 15 years, a wood shingle roof 15 to 30; but this
          will depend on a variety of factors such as the model and how well
          they’ve been maintained.
        </p>
        <p>
          <b>Check for flaws.</b> Walk from room to room—and around the exterior
          of your house—looking for things that might detract from your home’s
          appearance and drag down its value. Some common problems include
          cracks in walls, water stains on ceilings, and doors and windows that
          don’t open or shut easily. Since you might be used to your home’s
          little quirks, it may help to get a real estate agent’s objective
          opinion, or to hire
        </p>
        <p>
          <b>Consider selling your home as is.</b> If you don’t want the hassles
          of fixing up your house before you sell, you have the option to sell
          your home as is, without any improvements. This may mean you accept a
          lower price, but it’s worth considering if selling quickly and easily
          is your priority.
        </p>
      </div>
      <div className="other-guides">
        <h1>Other Seller Guides</h1>
        <div className="guides">
          <Link to="/how-to-sell">
            <p>How Shoud I Sell My Home?</p>
          </Link>
          <Link to={"/how-much-is-worth"}>
            <p>How Much is My House Worth?</p>
          </Link>
          <p>How To Prepare Your Home For Sale?</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage3;
