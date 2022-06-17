import { useState } from "react";
import iconLupa from "../images/lupa.png";

function Search({ filterPlants }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log("target", e.target.value);
    filterPlants(e.target.value);
  };

  return (
    <div className="searchBar-container">
      <br />
      <br />
      <div className="CardInner">
        <div className="container">
          <img className="Icon-lupa" src={iconLupa} alt="" />

          <input
            className="input-search"
            value={search}
            type="text"
            onChange={handleSearchInput}
            placeholder="Search for your plant..."
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Search;
