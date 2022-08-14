import { Link } from "react-router-dom";
import { BiRestaurant, BiHeart } from "react-icons/bi";

export default function Card(props) {
  return (
    <div className="card-frame" key={props.id}>
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-text-container">
        <h3 className="card-recipe-title"> {props.title} </h3>
        <h4 className="card-recipe-details">
          {" "}
          <span className="card-recipe-icons">
            <BiRestaurant />
          </span>
          Servings: {props.servings}
        </h4>
        <h4 className="card-recipe-details">
          {" "}
          <span className="card-recipe-icons">
            <BiHeart />
          </span>
          Health Score: {props.hscore}
        </h4>
      </div>
      <div className="flex justify-center">
        <span className="card-divider"></span>
      </div>
      <Link to={`/search/recipe/${props.id}`}>
        <div className="card-button-container">
          <span className="card-button">View Recipe</span>
        </div>
      </Link>
    </div>
  );
}
