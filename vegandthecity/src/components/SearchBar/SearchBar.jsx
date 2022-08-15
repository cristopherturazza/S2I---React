import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  const { recipes, setRecipes } = useContext(GlobalContext);
  const [input, setInput] = useState(""); // inputs from the user keyboard
  const [light, setLight] = useState("searchbar");
  // added to avoid problems when the user search the same word with differents options
  const [trigger, setTrigger] = useState(false); // trigger for fetching data

  let navigate = useNavigate();

  // capture search bar inputs

  const searchInput = (e) => setInput(e.target.value);

  // handle submit from the form

  const submitHandler = (e) => {
    e.preventDefault();
    setTrigger(!trigger);
    navigate("../search/" + input, {
      replace: true,
    });
    setInput("");
  };

  return (
    <div className="searchbar-container">
      <div className={light}>
        <span className="search-icon" onClick={submitHandler}>
          <BiSearch />
        </span>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            size="30"
            placeholder="type a keyword..."
            value={input}
            onChange={searchInput}
            onFocus={(e) => setLight("searchbar-light")}
            onBlur={(e) => setLight("searchbar")}
          />
        </form>
      </div>
    </div>
  );
}
