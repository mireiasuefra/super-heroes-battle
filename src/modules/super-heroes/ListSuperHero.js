import { Link } from "react-router-dom";

function ListSuperHero(props) {
  const renderSuperHero = () => {
    const superHeroesFiltered = props.superHeroes
      .filter((oneSuperHero) => {
        return oneSuperHero.name
          .toLowerCase()
          .includes(props.filterNameSuperHero.toLocaleLowerCase());
      })
      .filter((oneSuperHero) => {
        return props.filterGenderSuperHero === "all"
          ? true
          : oneSuperHero.gender.toLocaleLowerCase() ===
              props.filterGenderSuperHero;
      });

    if (superHeroesFiltered.length > 0) {
      return superHeroesFiltered.map((oneSuperHero) => {
        return (
          <Link to={`/super-hero/${oneSuperHero.id}`} key={oneSuperHero.id}>
            <li className="list-super-hero__list-item">
              <img
                className="list-super-hero__image"
                src={oneSuperHero.images.sm}
                alt={oneSuperHero.name}
              />
              <p className="list-super-hero__name">{oneSuperHero.name}</p>
            </li>
          </Link>
        );
      });
    } else {
      return (
        <p className="list-super-hero__not-found">
          No hemos encontrado super héroes con ese nombre
        </p>
      );
    }
  };

  return (
    <div className="list-super-hero">
      <ul className="list-super-hero__list">{renderSuperHero()}</ul>
    </div>
  );
}

export default ListSuperHero;
