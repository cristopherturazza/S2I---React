import { useContext, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FavoritesContext } from "../../context/FavoritesContextProvider";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function FavoritesPanel() {
  const { favRecipes } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="favorites-container">
      <div className="favorites-title">
        <h1>My Favorite Recipes</h1>
      </div>
      <div className="favorites-card-container">
        {isLoading === true && (
          <div className="search-loader">
            <LoadingSpinner />
          </div>
        )}
        {favRecipes.length === 0 && (
          <div className="no-favorites">
            <h3 className="no-recipes">No favorite recipes here.</h3>
            <Link to={"/"}>
              <span className="favorites-back-home">Back to the homepage</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
