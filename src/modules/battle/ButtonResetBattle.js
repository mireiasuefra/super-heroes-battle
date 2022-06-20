function ButtonResetBattle(props) {
  const resetBtn = () => {
    props.setSuperHero("");
    
  };

  return (
    <div className="reset">
       <button className="reset__button" onClick={resetBtn}>Reset</button>; 
    </div>
  );
}

export default ButtonResetBattle;