import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchBar = forwardRef((props, ref) => {
  const [input, setInput] = useState(""); // inputs from the user keyboard
  const [light, setLight] = useState("searchbar");

  let navigate = useNavigate();

  // capture search bar inputs

  const searchInput = (e) => setInput(e.target.value);

  // handle submit from the form

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      navigate("../search/" + input, {
        replace: true,
      });
      setInput("");
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-title">
        <h1> {props.title} </h1>
      </div>
      <div className={light}>
        <span className="search-icon" onClick={submitHandler}>
          <BiSearch />
        </span>
        <form onSubmit={submitHandler}>
          <input
            ref={ref}
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
});

export default SearchBar;
