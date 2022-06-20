import { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function SelectHero() {
  const superHeroes = useSelector(
    (state) => state.superHeroReducer.superHeroes
  );
  const [superHero, setSuperHero] = useState(null);
  const superHeroesOptions = superHeroes.map((oneSuperHero) => {
    return {
      label: `${oneSuperHero.name} / ${oneSuperHero.id}`,
      superHero: oneSuperHero,
    };
  });

  const onChange = (event, option) => {
    setSuperHero(option.superHero);
  };

  return (
    <div className="select-hero">
      <Autocomplete
        id="select-hero"
        options={superHeroesOptions}
        sx={{ width: 1 }}
        renderInput={(params) => (
          <TextField {...params} label="Elige tu super héroe" />
        )}
        onChange={onChange}
      />
      <div>
        {superHero ? (
          <p>Superhero seleccionado {superHero.name} </p>
        ) : (
          <p>Selecciona super heroe</p>
        )}
      </div>
    </div>
  );
}

export default SelectHero;
