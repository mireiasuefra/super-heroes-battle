function ListSuperHero(props) {
  const renderSuperHero = () => {
    const superHeroFiltered = props.superHeros
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

    if (superHeroFiltered.length > 0) {
      return superHeroFiltered.map((oneSuperHero) => {
        return (
          <li className="list-super-hero__list-item" key={oneSuperHero.id}>
            <img
              className="list-super-hero__image"
              src={oneSuperHero.images.sm}
              alt={oneSuperHero.name}
            ></img>
            <p className="list-super-hero__name">{oneSuperHero.name}</p>
          </li>
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
