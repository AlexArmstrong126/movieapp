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
            <Link to="/">tMovies</Link>
          </div>
        </div>
      </div>
      <div className="footer_content_menus">
        <div className="footer_content_menu">
          <Link to="/"> Home</Link>
          <Link to="/"> Cotnact Us</Link>
          <Link to="/"> Terms of Service</Link>
          <Link to="/"> About Us</Link>
        </div>
        <div className="footer_content_menu">
          <Link to="/"> Live</Link>
          <Link to="/"> FAQ Us</Link>
          <Link to="/"> Premium</Link>
          <Link to="/"> Privacy Policy</Link>
        </div>
        <div className="footer_content_menu">
          <Link to="/"> Must Watch</Link>
          <Link to="/"> Recent Releases</Link>
          <Link to="/"> Top IMDB</Link>
        </div>
      </div>
    </div>
  );
};
