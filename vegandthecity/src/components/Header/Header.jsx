import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-frame">
      <Link to={"/"}>
        <div className="header-home-button">
          <FaHome />
        </div>
        <h1 className="header-title">
          {" "}
          VEG
          <span className="and-the-container">
            <h2>and</h2>
            <h2>the</h2>
          </span>
          CITY{" "}
        </h1>
      </Link>
      <div className="header-navbar">
        <Link to={"/favorites/"}>
          <span className="nav-link">My Recipes</span>
        </Link>
      </div>
    </div>
  );
}
