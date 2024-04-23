import "./Navbar.scss";
import logo from "../../assets/images/compasslogo2.png";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  function handleAddButton(event: MouseEvent) {
    console.log(event.target);
  }

  function handleAppliedJobs(event: MouseEvent) {
    console.log(event.target);
  }

  function handleSearchButton(event: MouseEvent) {
    console.log(event.target);
  }
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-logo-container">
          <img className="navbar__logo" src={logo} alt="Career compass logo" />

          <h2 className="navbar__title">Career Compass</h2>
        </div>
      </Link>

      <SearchBar />

      <Button
        containerClassName="btn__search-container"
        buttonClassName="btn__search"
        buttonHandler={handleSearchButton}
        buttonType="button"
        buttonText="Search"
      />
      <Button
        containerClassName="btn__add-container"
        buttonClassName="btn__add"
        buttonHandler={handleAddButton}
        buttonType="button"
        buttonText="Add New Job"
      />

      <Button
        containerClassName="btn__applied-container"
        buttonClassName="btn__applied"
        buttonHandler={handleAppliedJobs}
        buttonType="button"
        buttonText="Applied Jobs"
      />
    </div>
  );
}

export default Navbar;
