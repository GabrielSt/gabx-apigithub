import React from "react";
import Logo from "../resources/images/github2.png";
import Search from "./search";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Gitfinder</span>
          <span className="heading-primary--sub">Search users here</span>
        </h1>
        <Search />
      </div>
    </header>
  );
}

export default Header;
