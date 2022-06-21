import { useState } from "react";
import ButtonResetBattle from "./ButtonResetBattle";
import SelectHero from "./SelectHero";
import SelectWeapon from "./SelectWeapon";

function BattlePage() {
  const [superHeroA, setSuperHeroA] = useState(null);
  const [superHeroB, setSuperHeroB] = useState(null);

  //const [selectWeapon, setSelectWeapon] = useState(null);

  const onFight = (weapon) => {
    let winner = null;
    console.log("PELEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAAAAA!!!!!!!!!!!!!");
    console.log("se enfrenta:", superHeroA);
    console.log("contra:", superHeroB);
    console.log("con el golpe:", weapon);
    console.log("GANADOR:", winner);
  };

  return (
    <div className="battle-page">
      <SelectHero onSelectSuperHero={setSuperHeroA} />
      <div>
        <ButtonResetBattle />
        <SelectWeapon onSelectWeapon={onFight} />
      </div>
      <SelectHero onSelectSuperHero={setSuperHeroB} />
    </div>
  );
}

export default BattlePage;
