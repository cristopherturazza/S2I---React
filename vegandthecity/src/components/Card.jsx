import { Link } from "react-router-dom";
import { BiRestaurant, BiHeart } from "react-icons/bi";

export default function Card(props) {
  return (
    <div
      className="bg-stone-100 w-1/4 mx-2 my-10 shadow-md rounded-xl"
      key={props.id}
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-64 w-full object-fill object rounded-t-xl"
      />
      <div className="flex flex-col flex-start h-28">
        <h3 className="truncate px-6 pt-4 text-md font-extrabold text-green-900">
          {" "}
          {props.title}{" "}
        </h3>
        <h4 className="flex flex-row px-6 py-2 text-sm font-medium text-green-900">
          {" "}
          <span className="pr-2 flex items-center drop-shadow-md">
            <BiRestaurant />
          </span>
          Servings: {props.servings}
        </h4>
        <h4 className="flex flex-row px-6 pb-2 text-sm font-medium  text-green-900">
          {" "}
          <span className="pr-2 flex items-center drop-shadow-md">
            <BiHeart />
          </span>
          Health Score: {props.hscore}
        </h4>
      </div>
      <div className="flex justify-center">
        <span className="border-b w-3/4"></span>
      </div>
      <Link to={`/search/recipe/${props.id}`}>
        <div className="flex justify-center items-center m-4 h-20">
          <span className="bg-green-800 hover:bg-green-700 px-6 py-4 font-medium text-stone-50 rounded-xl shadow-md hover:shadow-xl">
            View Recipe
          </span>
        </div>
      </Link>
    </div>
  );
}
