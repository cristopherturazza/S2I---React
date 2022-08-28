import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

export default function SearchFilters({
  handleDiet,
  handleTime,
  handleDairy,
  handleGluten,
}) {
  const [time, setTime] = useState(60);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterButton = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="filters-container">
      <div
        className={`filter-button-container ${filterOpen ? "shadow-xl" : ""}`}
      >
        <div className="filter-button" onClick={handleFilterButton}>
          <span className="pr-6">Filters </span>
          {filterOpen ? (
            <BsCaretUpFill className="mt-0.5" />
          ) : (
            <BsCaretDownFill className="mt-0.5" />
          )}
        </div>
      </div>
      <div
        className={`filter-box ${filterOpen ? "scale-y-100" : "scale-y-0 h-0"}`}
      >
        <div className="single-filter-container">
          <label>Vegan</label>
          <input
            type="checkbox"
            className="filter-checkbox"
            onClick={(e) => handleDiet(!!e.target.checked)}
          />
        </div>
        <div className="single-filter-container">
          <label>Dairy Free</label>
          <input
            type="checkbox"
            className="filter-checkbox"
            onClick={(e) => handleDairy(!!e.target.checked)}
          />
        </div>
        <div className="single-filter-container">
          <label>Gluten Free</label>
          <input
            type="checkbox"
            className="filter-checkbox"
            onClick={(e) => handleGluten(!!e.target.checked)}
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
    </div>
  );
}
