import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function SuperHeroPage() {
  let { id } = useParams();
  const superHero = useSelector((state) => state.superHeroReducer.superHeroes.find((oneSuperHero) => oneSuperHero.id.toString() === id));

  return superHero ? (
    <div className="super-hero-page">
      <img
        className="super-hero-page__image"
        src={superHero.images.md}
        alt={superHero.name}
      ></img>
      <div>
        <h2 className="super-hero-page__title">{superHero.name} </h2>

        <p className="super-hero-page__text">
          La raza de este súper héroe es: {superHero.appearance.race}. Se trata
          de un personaje {superHero.appearance.gender} y tiene una fueza de{" "}
          {superHero.powerstats.strength}%. Tiene una durabilidad de un {" "}
          {superHero.powerstats.durability}% y un poder de combate del{" "}
          {superHero.powerstats.combat}%. Su rapidez es del{" "}
          {superHero.powerstats.speed}% y tiene un{" "}
          {superHero.powerstats.intelligence}% de inteligencia.
        </p>
      </div>
    </div>
  ) : null;
}

export default SuperHeroPage;
