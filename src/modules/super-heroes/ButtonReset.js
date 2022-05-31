function ButtonReset(props) {
  const resetBtn = () => {
    props.setFilterNameSuperHero("");
    props.setfilterGenderSuperHero("all");
  };

  return (
    <div className="reset">
       <button className="reset__button" onClick={resetBtn}>Reset</button>; 
    </div>
  );
}

export default ButtonReset;