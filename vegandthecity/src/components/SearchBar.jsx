import { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

export default function SearchBar() {
  const { recipes, setRecipes } = useContext(GlobalContext);
  const [input, setInput] = useState(""); // inputs from the user keyboard
  const [query, setQuery] = useState(""); // submitted keyword

  // skip the first useEffect rendering

  const initialRender = useRef(true);

  // added to avoid problems when the user search the same word with differents options
  const [trigger, setTrigger] = useState(false); // trigger for fetching data
  const [vegan, setVegan] = useState(false); // vegan filter on/off
  const [cooktime, setCooktime] = useState(15); // max cooking filter option

  // fetch data function

  const searchRecipes = async (time, keyword, option) => {
    const diet = option ? "vegan" : "vegetarian";

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&maxReadyTime=${time}&number=12&query=${keyword}&diet=${diet}`
      );
      const data = response.data;
      setRecipes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // capture search bar inputs

  const searchInput = (e) => setInput(e.target.value);

  // handle submit from the form

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(input);
    setTrigger(!trigger);
    setInput("");
  };

  // this hook not runs at the component mount, only for the next updates - trigger fetch data

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      searchRecipes(cooktime, query, vegan);
    }
  }, [trigger]);

  return (
    <div className="mt-12 p-8 flex flex-col">
      <form onSubmit={submitHandler}>
        <div className="flex justify-center">
          <input
            type="text"
            className="p-4 w-1/3 rounded-lg shadow-md outline-none focus:outline-green-200"
            placeholder="type a keyword (salad, apple, etc...)"
            value={input}
            onChange={searchInput}
          />
        </div>
        <div className="p-2 flex flex-row justify-center">
          <div className="flex flex-col p-4 items-center">
            <label>Vegan</label>
            <input
              type="checkbox"
              className="mt-2 h-6 w-6 text-center accent-green-800"
              value={vegan}
              onClick={() => setVegan(!vegan)}
            />
          </div>
          <div className="flex flex-col p-4 ">
            <label>Max Cooking Time</label>
            <select className="mt-2 rounded-md p-1 bg-stone-200  shadow-sm">
              <option value="15" onClick={() => setCooktime(15)}>
                15
              </option>
              <option value="20" onClick={() => setCooktime(20)}>
                20
              </option>
              <option value="30" onClick={() => setCooktime(30)}>
                30
              </option>
              <option value="120" defaultValue onClick={() => setCooktime(120)}>
                All recipes
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
