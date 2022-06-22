import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function SearchBar() {
  const { recipes, setRecipes } = useContext(GlobalContext);
  const [input, setInput] = useState(""); // inputs from the user keyboard

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
    <div className="m-12 p-8 flex flex-col">
      <form onSubmit={submitHandler}>
        <div className="flex justify-center">
          <input
            type="text"
            className="p-4 w-1/3 rounded-xl shadow-md outline-none focus:shadow-[#1380864D] focus:shadow-xl"
            placeholder="type a keyword (salad, apple, etc...)"
            value={input}
            onChange={searchInput}
          />
        </div>
      </form>
    </div>
  );
}
