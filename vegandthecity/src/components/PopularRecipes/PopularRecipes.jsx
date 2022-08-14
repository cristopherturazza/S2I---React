import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

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
    setIsLoading(false);
  };

  useEffect(() => {
    downloadPopular();
  }, []);

  return (
    <>
      {isLoading === true && (
        <div className="search-loader">
          <p>Loading...</p>
        </div>
      )}
      {isLoading === false && (
        <>
          <div className="recipes-container">
            <h1 className="recipes-searched-title">Staff Picks</h1>
          </div>
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
    </>
  );
}
