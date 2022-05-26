import { useState, useContext, useEffect, useRef } from "react";
import "../css/App.css";
import axios from "axios";
import { GlobalContext } from '../context/GlobalContext'; 

export default function SearchBar() {
  
  const {recipes, setRecipes} = useContext(GlobalContext);
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
    } 
    else {
    searchRecipes(cooktime, query, vegan);
    }
    
  }, [trigger]);

  return (
    <div className="Search-Wrapper">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="keywords (pasta, salad, apple...)"
          value={input}
          onChange={searchInput}
        />
        <label>Vegan</label>
        <input type="checkbox" value={vegan} onClick={() => setVegan(!vegan)} />
        <label>Max Cooking Time</label>
        <select>
          <option value="15" onClick={() => setCooktime(15)}>
            15
          </option>
          <option value="20" onClick={() => setCooktime(20)}>
            20
          </option>
          <option value="30" onClick={() => setCooktime(30)}>
            30
          </option>
          <option value="120" onClick={() => setCooktime(120)}>
            All recipes
          </option>
        </select>
      </form>

     
    </div>
  );
}
