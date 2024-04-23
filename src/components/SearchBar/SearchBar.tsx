import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.svg";

function SearchBar() {
  return (
    <>
      {/* <div className="searchBar-container"> */}
      <div className="searchBar">
        <img
          className="searchBar__icon"
          src={SearchIcon}
          alt="Search Icon image"
        />
        {/* <h3 className="searchBar__text">Search</h3> */}
        <input
          className="searchBar__input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
