import "./HomePage.scss";
// import logo from "../../assets/images/compass logo.jpeg";
import logo from "../../assets/images/compasslogo2.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* <div>HomePage</div> */}
      <div className="homepage-container">
        <img className="homepage__image" src={logo} alt="Career compass logo" />
        <h1 className="homepage__title">Career Compass</h1>
        <h2 className="homepage__subtext">The North Star to your Career</h2>
        <Link to={"/dashboard"}>
          <button className="homepage__button" type="button">
            Open My Board
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
