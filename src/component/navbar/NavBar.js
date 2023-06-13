import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import icon from "../../assets/searchIcon.svg";
import "./SearchBar.css";
import { ArticlesContext } from "../../context";

function NavBar() {
  const { articles, setArticles } = useContext(ArticlesContext);
  return (
    <div className={"navBar"}>
      <img className={"logo"} src={logo} alt={logo} />
      <div className={"container"}>
        <input
          className={"inputField"}
          type={"text"}
          placeholder={"Search here..."}
        />
        <img className={"searchIcon"} src={icon} alt={"icon"} />
      </div>
    </div>
  );
}

export default NavBar;
