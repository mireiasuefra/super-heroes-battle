
import ButtonResetBattle from "./ButtonResetBattle";
import SelectHero from "./SelectHero";
import SelectWeapon from "./SelectWeapon";

function BattlePage() {
 

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
