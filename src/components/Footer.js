import logoFooter from "../images/logo-footer.JPG";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <img className="footer__img" src={logoFooter} alt="Logo"></img>
        <div className="footer__rrss">
          <p className="footer__rrss-title">About me:</p>
          <a
            className="footer__rrss-web"
            href="https://github.com/mireiasuefra"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon fab fa-github-square"></i>
          </a>
          <a
            className="footer__rrss-web"
            href="https://www.linkedin.com/in/mireia-suefra/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon fab fa-linkedin"></i>
          </a>
          <Link to="/email" className="footer__rrss-web">
            <i className="icon fa fa-envelope"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Footer;
