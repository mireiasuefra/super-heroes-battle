function ListSuperHero(props) {
  const renderSuperHero = () => {
    return props.superHeros.map((oneSuperHero, index) => {
      return (
        <li className="list-super-hero__list-item" key={oneSuperHero.id}>
          <img className="list-super-hero__image"src={oneSuperHero.images.sm} alt={oneSuperHero.name}></img>
          <p className="list-super-hero__name">{oneSuperHero.name}</p>
        </li>
      );
    });
  };

  return <div className="list-super-hero">
    <ul className="list-super-hero__list">
      {renderSuperHero()}
    </ul>
  </div>;
}

export default ListSuperHero;
