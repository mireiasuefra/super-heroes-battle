const callToApi = () => {
  return fetch(
    "http://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.map((oneSuperHero) => {
        return {
          id: oneSuperHero.id,
          name: oneSuperHero.name,
          images: oneSuperHero.images,
          gender: oneSuperHero.appearance.gender,
          work: oneSuperHero.work.occupation,
          powerstats: oneSuperHero.powerstats,
        };
      });
    });
};

export default callToApi;
