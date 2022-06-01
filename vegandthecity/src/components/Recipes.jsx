import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function Recipes() {
  const { recipes } = useContext(GlobalContext);
  const [details, setDetails] = useState([]);

  // fetch popular recipes for the homepage

  const downloadPopular = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
      );
      const data = response.data;
      setDetails(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    downloadPopular();
  }, []);

  return (
    <>
      {details.length === 0 && (
        <div className="flex w-full justify-center font-medium">
          <p>No recipes founded.</p>
        </div>
      )}
      {details.length > 0 && (
        <>
          <div className="flex justify-center shadow-md">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-900 to-violet-600 w-full p-6 text-center text-stone-50">
              {recipes.length === 0 ? "Staff Picks" : "Search Results"}
            </h1>
          </div>
          <div className="justify-evenly flex flex-row flex-wrap p-8">
            {details.map((recipe) => (
              <div
                className="bg-stone-100 w-1/4 mx-2 my-10 shadow-md rounded-lg"
                key={recipe.id}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-64 w-full object-fill object rounded-t-lg"
                />
                <div className="flex flex-col flex-start h-16">
                  <h3 className="truncate px-6 py-4 text-md font-extrabold  text-green-900">
                    {" "}
                    {recipe.title}{" "}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <span className="border-b w-3/4"></span>
                </div>
                <Link to={`recipe/${details.id}`}>
                  <div className="flex justify-center items-center m-4 h-20">
                    <span className="bg-green-800 hover:bg-green-700 px-6 py-4 font-medium text-stone-50 rounded-xl shadow-md hover:shadow-xl">
                      View Recipe
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
