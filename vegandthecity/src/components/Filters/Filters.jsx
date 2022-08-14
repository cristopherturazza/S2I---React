import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function SearchFilters({
  handleDiet,
  handleTime,
  handleDairy,
  handleGluten,
}) {
  const [time, setTime] = useState(60);

  return (
    <div className="filters-container">
      <span className="flex p-4 items-center">Filters:</span>
      <div className="single-filter-container">
        <label>Vegan</label>
        <input
          type="checkbox"
          className="filter-checkbox"
          onClick={(e) => handleDiet(e.target.checked ? true : false)}
        />
      </div>
      <div className="single-filter-container">
        <label>Dairy Free</label>
        <input
          type="checkbox"
          className="filter-checkbox"
          onClick={(e) => handleDairy(e.target.checked ? true : false)}
        />
      </div>
      <div className="single-filter-container">
        <label>Gluten Free</label>
        <input
          type="checkbox"
          className="filter-checkbox"
          onClick={(e) => handleGluten(e.target.checked ? true : false)}
        />
      </div>
      <div className="single-filter-container">
        <label htmlFor="time-range">Max Cooking Time: {time} </label>
        <input
          id="time-range"
          type="range"
          min="20"
          max="90"
          defaultValue="60"
          step="10"
          className="filter-time-slider"
          onChange={(e) => {
            handleTime(e.target.value);
            setTime(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
