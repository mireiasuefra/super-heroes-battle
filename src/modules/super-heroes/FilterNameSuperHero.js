function FilterNameSuperHero(props) {
  
  return (
    <div className="filter-name-superHero">
      <label className="filter-name-superHero__serch-superHero" htmlFor="name">
        Busca por Súper Héroe:
      </label>
      <input
        className="filter-name-superHero__input-serch-superHero"
        type="text"
        name="name"
        id="name"
        placeholder="Escribe aquí su nombre"
        value={props.filterNameSuperHero}
        onChange={props.handleSearchFilterNameSuperHero}
      />
    </div>
  );
}

export default FilterNameSuperHero;
