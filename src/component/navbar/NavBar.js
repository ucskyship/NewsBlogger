import logo from "../../assets/logo.svg";
import "./Navbar.css";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className={"navBar"}>
      <img className={"logo"} src={logo} alt={logo} />
      <Search />
    </div>
  );
};

export default NavBar;
