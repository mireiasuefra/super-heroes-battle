function SelectWeapon() {

  const onClick = () => {
    console.log('CLICK');
  };

  return (
    <div className="select-weapon">
      <button className="select-weapon__weapon">
        <i className="fa fa-hand-rock" onClick={onClick}></i>
      </button>
      <button className="select-weapon__weapon">
        <i className="fas fa-brain" onClick={onClick}></i>
      </button>
      <button className="select-weapon__weapon">
        <i className="fas fa-bolt" onClick={onClick}></i>
      </button>
    </div>
  );
}

export default SelectWeapon;
