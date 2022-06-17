import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SuperHeroPage() {
  let { id } = useParams();
  const superHero = useSelector((state) =>
    state.superHeroReducer.superHeroes.find(
      (oneSuperHero) => oneSuperHero.id.toString() === id
    )
  );

  return superHero ? (
    <div className="super-hero-page">

<h2 className="super-hero-page__title">{superHero.name} </h2>

      <div className="super-hero-page__card">
      <img
        className="super-hero-page__image"
        src={superHero.images.md}
        alt={superHero.name}
      ></img>

        <ul className="super-hero-page__text">
          {superHero.appearance.race ? <li>Raza: {superHero.appearance.race}</li> : null }
          <li> Genero: {superHero.appearance.gender}</li>
          <li>Durabilidad: {superHero.powerstats.durability}%</li>
          <li>Poder: {superHero.powerstats.combat}%.</li>
          <li> Rapidez: {superHero.powerstats.speed}%</li>
          <li>Inteligencia: {superHero.powerstats.intelligence}%</li>
          <li>Fuerza: {superHero.powerstats.strength}%</li>
        </ul>
      </div>
    </div>
  ) : null;
}

export default SuperHeroPage;
