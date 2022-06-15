import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex w-full flex-start bg-gradient-to-r from-green-900 to-green-800 h-40 shadow-lg">
      <Link to={"/"}>
        <h1 className="font-black text-stone-50 text-4xl p-8">
          {" "}
          VEG and the CITY{" "}
        </h1>
      </Link>
    </div>
  );
}
