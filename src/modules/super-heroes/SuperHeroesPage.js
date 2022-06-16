import { useState } from "react";
import { useSelector } from 'react-redux'

import FilterNameSuperHero from "./FilterNameSuperHero";
import FilterGenderSuperHero from "./FilterGenderSuperHero";
import ButtonReset from "./ButtonReset";
import ListSuperHero from "./ListSuperHero";

function SuperHeroesPage() {
  const superHeroes = useSelector((state) => state.superHeroReducer.superHeroes);
  const [filterNameSuperHero, setFilterNameSuperHero] = useState("");
  const [filterGenderSuperHero, setfilterGenderSuperHero] = useState("all");

  //Para buscar por nombre superHero:
  const handleSearchFilterNameSuperHero = (ev) => {
    setFilterNameSuperHero(ev.currentTarget.value);
  };

  //Para buscar por genero superHero:
  const handleSearchFilterGenderSuperHero = (ev) => {
    setfilterGenderSuperHero(ev.currentTarget.value);
  };

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
        <ButtonReset 
        setFilterNameSuperHero={setFilterNameSuperHero}
        setfilterGenderSuperHero={setfilterGenderSuperHero}
        />
      </form>
      <ListSuperHero
        superHeroes={superHeroes}
        filterNameSuperHero={filterNameSuperHero}
        filterGenderSuperHero={filterGenderSuperHero}
      />
    </div>
  );
}

export default SuperHeroesPage;
