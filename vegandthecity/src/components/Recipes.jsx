import { useState, useContext } from "react";
import "../css/App.css";
import { GlobalContext } from '../context/GlobalContext'; 

export default function Recipes (){

    const {recipes} = useContext(GlobalContext);

    return(
            <div className="Recipes">
            {recipes.length === 0 && <p>No recipes founded.</p>}
            {recipes.map((recipe) => (
            <div className="Searched-Recipe" key={recipe.id}>
                <h1> {recipe.title} </h1>
                <img src={recipe.image} alt={recipe.title} />
                <button className="Open-Recipe">Read More...</button>
            </div>
            ))}
            </div>
        )




}