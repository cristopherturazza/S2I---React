import { Link } from "react-router-dom";
import noImage from "../../img/no-image.png";

export default function Card(props) {
  return (
    <div className="minicard-frame" key={props.id}>
      {props.image ? (
        <img src={props.image} alt={props.title} className="minicard-image" />
      ) : (
        <img
          src={noImage}
          alt={props.title}
          className="minicard-image max-w-lg"
        />
      )}
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
