import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="column col1">
        <h3>FIND US</h3>
        <p>
          <BsInstagram className="icon" /> Instagram
        </p>
        <p>
          <BsFacebook className="icon" /> Facebook
        </p>
        <p>
          <BsTwitter className="icon" /> Twitter
        </p>
        <p>
          <BsGithub className="icon" /> GitHub
        </p>
        <p>
          <RiYoutubeFill className="icon" /> YouTube
        </p>
      </div>
      <div className="column">
        <h3>RESOURCES</h3>
        <p>Application</p>
        <p>Documentation</p>
        <p>Systems</p>
        <p>FAQ</p>
      </div>
      <div className="column">
        <h3>PRICING</h3>
        <p>Overview</p>
        <p>Premium Plans</p>
        <p>Promotions</p>
        <p>Payments</p>
      </div>
      <div className="column">
        <h3>COMPANY</h3>
        <p>About Us</p>
        <p>Blog</p>
        <p>Partnership</p>
        <p>Press</p>
      </div>
    </div>
  );
};

export default Footer;
