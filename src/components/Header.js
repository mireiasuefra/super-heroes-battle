import logoHeader from "../images/logo-header.JPG";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logoHeader} alt="Logo"></img>
      </Link>
    </header>
  );
}

export default Header;
