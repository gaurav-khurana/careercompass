import "./Navbar.scss";
import logo from "../../assets/images/compasslogo2.png";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleAddButton(event: MouseEvent) {
    console.log(event.target);
    navigate("/addjob");
  }

  function handleLogout(event: MouseEvent) {
    console.log(event.target);
    localStorage.removeItem("token");
    alert("Logout Successful");
    navigate("/");
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
        containerClassName="btn__add-container"
        buttonClassName="btn__add"
        buttonHandler={handleAddButton}
        buttonType="button"
        buttonText="Add New Job"
      />

      <Button
        containerClassName="btn__logout-container"
        buttonClassName="btn__logout"
        buttonHandler={handleLogout}
        buttonType="button"
        buttonText="Logout"
      />
    </div>
  );
}

export default Navbar;
