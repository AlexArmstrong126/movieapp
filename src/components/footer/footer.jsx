import React from "react";
import "./footer.scss";

import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/movie-icon.jpeg";

export const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-content container">
        <div className="footer_content_logo">
          {" "}
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/movieapp">Movie App</Link>
          </div>
        </div>
      </div>
      <div className="footer_content_menus">
        <div className="footer_content_menu">
          <Link to="/movieapp"> Home</Link>
          <Link to="/movieapp"> Cotnact Us</Link>
          <Link to="/movieapp"> Terms of Service</Link>
          <Link to="/movieapp"> About Us</Link>
        </div>
        <div className="footer_content_menu">
          <Link to="/movieapp"> Live</Link>
          <Link to="/movieapp"> FAQ Us</Link>
          <Link to="/movieapp"> Premium</Link>
          <Link to="/movieapp"> Privacy Policy</Link>
        </div>
        <div className="footer_content_menu">
          <Link to="/movieapp"> Must Watch</Link>
          <Link to="/movieapp"> Recent Releases</Link>
          <Link to="/movieapp"> Top IMDB</Link>
        </div>
      </div>
    </div>
  );
};
