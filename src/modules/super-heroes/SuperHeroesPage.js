import { useEffect, useState } from "react";
import ls from '../../services/localstorage';
import callToApi from "../../services/api-list";

//import FilterNameSuperHero from "./FilterNameSuperHero";
//import FilterGenderSuperHero from "./FilterGenderSuperHero";
//import FilterRaceSuperHero from "./FilterRaceSuperHero";
//import ButtonReset from "./ButtonReset";
import ListSuperHero from "./ListSuperHero";


function SuperHeroesPage() {

  // Variables ESTADO: 

  const [superHeros, setSuperHeros] = useState(ls.get("superHero", []));

  // Llamada a la API:
  useEffect(() => {
    callToApi()
    .then((response) => {
      setSuperHeros(response);
    });
    //cada vez que cambia la variable filterHouseCharacters se ejecuta lo que hay dentro del useEffect: la llamada a la api, utilizando el  filterHouseCharacters como parámetro
  }, []);
  
  /*
  const [filterNameSuperHero, setFilterNameSuperHero] = useState(
    ls.get("filterSuperHero", "")
  );
  const [filterGenderSuperHero, setfilterGenderSuperHero] = useState(
    ls.get("filterGenderSuperHero", "")
  );
  const [filterRaceSuperHero, setfilterRaceSuperHero] = useState(
    ls.get("filterRaceSuperHero", "")
  );

  //Para buscar por nombre superHero:
  const handleSearchFilterNameSuperHero = (ev) => {
    setFilterNameSuperHero(ev.currentTarget.value);
  };

  //Para buscar por genero superHero:
  const handleSearchFilterGenderSuperHero = (ev) => {
    setfilterGenderSuperHero(ev.currentTarget.value);
  };

  //Para buscar por raza superHero:
  const handleSearchFilterRaceSuperHero = (ev) => {
    setfilterRaceSuperHero(ev.currentTarget.value);
  };
  */

  return (
    <div>
      {/*
         <form onSubmit={(ev) => ev.preventDefault()}>

        <FilterNameSuperHero 
        filterNameSuperHero={filterNameSuperHero}
        handleSearchFilterNameSuperHero={handleSearchFilterNameSuperHero}
        />

        <FilterGenderSuperHero 
        filterGenderSuperHero={filterGenderSuperHero}
        handleSearchFilterGenderSuperHero={handleSearchFilterGenderSuperHero}
        />

        <FilterRaceSuperHero 
        filterRaceSuperHero={filterRaceSuperHero}
        handleSearchFilterRaceSuperHero={handleSearchFilterRaceSuperHero}
        />

        <ButtonReset />

      </form>
  */}
      <ListSuperHero 
        superHeros={superHeros}
      />
    
    </div>
  );
}

export default SuperHeroesPage;
