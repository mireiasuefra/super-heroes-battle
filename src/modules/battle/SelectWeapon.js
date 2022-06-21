function SelectWeapon(props) {

  const onClick = (weapon) => {
    props.onSelectWeapon(weapon);
  }

  return (
    <div className="select-weapon" >
      <button
      onClick={() => onClick("strength")}
        className="select-weapon__weapon"
      >
        <i className="fa fa-hand-rock"></i>
      </button>
      <button
      onClick={() => onClick("intelligence")}
        className="select-weapon__weapon"
      >
        <i className="fas fa-brain"></i>
      </button>
      <button
      onClick={() => onClick("speed")}
        className="select-weapon__weapon"
      >
        <i className="fas fa-bolt"></i>
      </button>
    </div>
  );
}

export default SelectWeapon;
