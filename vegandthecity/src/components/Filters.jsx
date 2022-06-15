import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function SearchFilters({ handleDiet, handleTime }) {
  return (
    <div className="p-2 flex flex-row justify-center">
      <span className="flex p-4 items-center">Filters:</span>
      <div className="flex flex-col p-4 items-center">
        <label>Vegan</label>
        <input
          type="checkbox"
          className="mt-2 h-6 w-6 text-center accent-green-800"
          onClick={(e) => handleDiet(e.target.checked ? true : false)}
        />
      </div>
      <div className="flex flex-col p-4 ">
        <label>Max Cooking Time</label>
        <select className="mt-2 rounded-md p-1 bg-stone-200  shadow-sm">
          <option value="120" onClick={() => handleTime(120)}>
            All recipes
          </option>
          <option value="20" onClick={() => handleTime(20)}>
            20
          </option>
          <option value="30" onClick={() => handleTime(30)}>
            30
          </option>
          <option value="45" onClick={() => handleTime(45)}>
            45
          </option>
        </select>
      </div>
    </div>
  );
}
