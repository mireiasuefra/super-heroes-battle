import { useEffect, useState } from "react";
import ls from "../../services/localstorage";
import callToApi from "../../services/api-list";

import FilterNameSuperHero from "./FilterNameSuperHero";
import FilterGenderSuperHero from "./FilterGenderSuperHero";
//import FilterRaceSuperHero from "./FilterRaceSuperHero";
//import ButtonReset from "./ButtonReset";
import ListSuperHero from "./ListSuperHero";

function SuperHeroesPage() {
  // Variables ESTADO:

  const [superHeros, setSuperHeros] = useState([]);
  const [filterNameSuperHero, setFilterNameSuperHero] = useState('');
  const [filterGenderSuperHero, setfilterGenderSuperHero] = useState('all');

  // Llamada a la API:
  useEffect(() => {
    callToApi().then((response) => {
      setSuperHeros(response);
    });
    //cada vez que cambia la variable filterHouseCharacters se ejecuta lo que hay dentro del useEffect: la llamada a la api, utilizando el  filterHouseCharacters como parámetro
  }, []);

  /*
  const [filterRaceSuperHero, setfilterRaceSuperHero] = useState(
    ls.get("filterRaceSuperHero", "")
  );
    */

  //Para buscar por nombre superHero:
  const handleSearchFilterNameSuperHero = (ev) => {
    setFilterNameSuperHero(ev.currentTarget.value);
  };

  //Para buscar por genero superHero:
  const handleSearchFilterGenderSuperHero = (ev) => {
    setfilterGenderSuperHero(ev.currentTarget.value);
  };

  /*
  //Para buscar por raza superHero:
  const handleSearchFilterRaceSuperHero = (ev) => {
    setfilterRaceSuperHero(ev.currentTarget.value);
  };
  */

  return (
    <div>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <FilterNameSuperHero
          filterNameSuperHero={filterNameSuperHero}
          handleSearchFilterNameSuperHero={handleSearchFilterNameSuperHero}
        />
        <FilterGenderSuperHero
          filterGenderSuperHero={filterGenderSuperHero}
          handleSearchFilterGenderSuperHero={handleSearchFilterGenderSuperHero}
        />
      </form>

      {/*
         

        



        <FilterRaceSuperHero 
        filterRaceSuperHero={filterRaceSuperHero}
        handleSearchFilterRaceSuperHero={handleSearchFilterRaceSuperHero}
        />

        <ButtonReset />

     
  */}
      <ListSuperHero
        superHeros={superHeros}
        filterNameSuperHero={filterNameSuperHero}
        filterGenderSuperHero={filterGenderSuperHero}
      />
    </div>
  );
}

export default SuperHeroesPage;
