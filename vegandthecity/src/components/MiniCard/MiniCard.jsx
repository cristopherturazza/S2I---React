import { Link } from "react-router-dom";
import { BiRestaurant, BiHeart } from "react-icons/bi";

export default function Card(props) {
  return (
    <div className="minicard-frame" key={props.id}>
      <img src={props.image} alt={props.title} className="minicard-image" />
      <div className="minicard-text-container">
        <h3 className="minicard-recipe-title"> {props.title} </h3>
      </div>
      <Link to={`/search/recipe/${props.id}`}>
        <div className="minicard-button-container">
          <span className="minicard-button">View Recipe</span>
        </div>
      </Link>
    </div>
  );
}
