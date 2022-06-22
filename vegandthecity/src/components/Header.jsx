import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-frame">
      <Link to={"/"}>
        <h1 className="font-black text-stone-50 text-4xl ml-12 p-8">
          {" "}
          VEG and the CITY{" "}
        </h1>
      </Link>
    </div>
  );
}
