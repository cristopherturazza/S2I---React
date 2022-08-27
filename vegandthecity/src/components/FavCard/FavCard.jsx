import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FavoritesContext } from "../../context/FavoritesContextProvider";
import { useContext } from "react";

export default function FavCard(props) {
  const { removeFavRecipe } = useContext(FavoritesContext);

  return (
    <div className="favcard-frame" key={props.id}>
      <img src={props.image} alt={props.title} className="favcard-image" />
      <div className="favcard-text-container">
        <h3 className="favcard-recipe-title"> {props.title} </h3>
      </div>
      <div className="favcard-button-container">
        <Link to={`/search/recipe/${props.id}`}>
          <span className="favcard-button dark-button">View Recipe</span>
        </Link>
        <span
          className="favcard-button light-button hover:text-red-700"
          onClick={() => {
            removeFavRecipe(props.id);
          }}
        >
          Remove <FaTrashAlt className="ml-2 text-lg" />
        </span>
      </div>
    </div>
  );
}
