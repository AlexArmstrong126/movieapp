import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/movie-icon.jpeg";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

export function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => {
    return e.path === pathname;
  });

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const handleClick = (path) => {};

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">Movie App</Link>
        </div>
        <ul className="header_nav">
          {headerNav.map((e, i) => (
            <li
              key={i}
              id={e.path}
              className={`${i === active ? "active" : ""}`}
            >
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
