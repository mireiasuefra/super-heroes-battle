import logoHeader from "../images/logo-header2.JPG";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logoHeader} alt="Logo"></img>
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
