import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-frame">
      <Link to={"/"}>
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
    </div>
  );
}
