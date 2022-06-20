import { useSelector } from "react-redux";
import SelectHero from "./SelectHero";

function BattlePage() {
  const superHeroes = useSelector(
    (state) => state.superHeroReducer.superHeroes
  );

  return (
    <div className="battle-page">
      <SelectHero />
      <SelectHero />
    </div>
  );
}

export default BattlePage;
