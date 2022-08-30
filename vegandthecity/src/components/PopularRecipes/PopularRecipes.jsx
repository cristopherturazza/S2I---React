import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function PopularRecipes() {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch popular recipes for the homepage

  const downloadPopular = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`
      );
      const data = response.data;
      setPopular(data.recipes);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    downloadPopular();
  }, []);

  return (
    <div className="recipes-container">
      <h1 className="recipes-searched-title">Today Picks</h1>
      {isLoading === true && (
        <div className="search-loader">
          <LoadingSpinner />
        </div>
      )}
      {isLoading === false && popular && popular.length === 0 && (
        <div className="search-loader">
          <p className="text-center">
            {" "}
            Connection to the server failed. <br />
            Try to reload the page.{" "}
          </p>
        </div>
      )}
      {isLoading === false && popular && popular.length > 0 && (
        <>
          <div className="recipes-searched">
            {popular.map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                servings={recipe.servings}
                hscore={recipe.healthScore}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
