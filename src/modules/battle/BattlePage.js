import { useSelector } from "react-redux";
import ButtonResetBattle from "./ButtonResetBattle";
import SelectHero from "./SelectHero";
import SelectWeapon from "./SelectWeapon";

function BattlePage() {
  const superHeroes = useSelector(
    (state) => state.superHeroReducer.superHeroes
  );

  return (
    <div className="battle-page">
      <SelectHero />
      <div>
      <ButtonResetBattle/>
      <SelectWeapon />
      </div>
      <SelectHero />
    </div>
  );
}

export default BattlePage;
