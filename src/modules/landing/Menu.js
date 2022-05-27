import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link className="menu__battle" to="/battle">
        Batalla
      </Link>
      <Link className="menu__super-heroes" to="/super-heroes">
      Súper Héroes
      </Link>
    </div>
  );
}

export default Menu;
