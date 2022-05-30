function FilterGenderSuperHero(props) {
    return (
      <div className="filter-gender-superHero">
      <label className="filter-gender-superHero__search-gender" htmlFor="gender">Selecciona el género:</label>
      <select
        className="filter-gender-superHero__select-search-gender"
        name="gender"
        id="gender"
        value={props.filterGenderSuperHero}
        onChange={props.handleSearchFilterGenderSuperHero}
      >
        <option value="all">Todos</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
      </select>
    </div>
    );
  }
  
  export default FilterGenderSuperHero;