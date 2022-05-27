import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/battle">Batalla</Link>
        </li>
        <li className="menu__item">
          <Link to="/super-heroes">Súper Héroes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
