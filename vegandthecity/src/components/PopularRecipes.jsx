import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card";

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
        <div className="flex w-full justify-center mt-32">
          <p>Loading...</p>
        </div>
      )}
      {isLoading === false && (
        <>
          <div className="flex justify-center shadow-md">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#534666] via-[#534666] to-[#DC8665] w-full p-6 text-center text-stone-50">
              Staff Picks
            </h1>
          </div>
          <div className="justify-evenly flex flex-row flex-wrap p-8">
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
