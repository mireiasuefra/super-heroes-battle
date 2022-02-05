const callToApi = () => {
  return fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json())
  .then((data) => {
    return data
      .sort((aSuperHero, bSuperHero) => {
        if (aSuperHero.name < bSuperHero.name) {
          return -1;
        }

        if (aSuperHero.name > bSuperHero.name) {
          return 1;
        }
        return 0;
      })
      .map((oneSuperHero) => {
        return {
          name: oneSuperHero.name,
        };
      });
  });
};

export default callToApi;
