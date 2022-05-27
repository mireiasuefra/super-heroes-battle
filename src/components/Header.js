import logoHeader from "../images/logo-header.JPG"


function Header() {
    return (
      <header className="header">
      <img className="header__img" src={logoHeader} alt="logo"></img>
      </header>
    );
  }


  
  export default Header;