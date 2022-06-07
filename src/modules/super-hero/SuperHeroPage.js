const superHero = {
  id: 659,
  name: "Thor",
  powerstats: {
    intelligence: 69,
    strength: 100,
    speed: 83,
    durability: 100,
    power: 100,
    combat: 100,
  },
  appearance: {
    gender: "Male",
    race: "Asgardian",
    height: ["6'6", "198 cm"],
    weight: ["640 lb", "288 kg"],
    eyeColor: "Blue",
    hairColor: "Blond",
  },
  biography: {
    fullName: "Thor Odinson",
    alterEgos: "Rune King Thor",
    aliases: [
      "Donald Blake",
      "Sigurd Jarlson",
      "Jake Olsen",
      "Donar the Mighty",
    ],
    placeOfBirth: "Asgard",
    firstAppearance: "Journey into Mystery #83 (August, 1962)",
    publisher: "Rune King Thor",
    alignment: "good",
  },
  work: {
    occupation: "King of Asgard; formerly EMS Technician; Physician",
    base: "New York, New York",
  },
  connections: {
    groupAffiliation: "Avengers",
    relatives:
      "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)",
  },
  images: {
    xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/659-thor.jpg",
    sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/659-thor.jpg",
    md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/659-thor.jpg",
    lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/659-thor.jpg",
  },
};

function SuperHeroPage(props) {
  return (
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
  );
}

export default SuperHeroPage;
