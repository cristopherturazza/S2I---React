import React, {useState} from 'react';
import '../css/App.css';
import SearchBar from '../components/SearchBar';
import Recipes from '../components/Recipes';
import { GlobalContext } from '../context/GlobalContext';         

function Home() {

  const [recipes, setRecipes] = useState([]); // searched recipes

  return (  
    <div className="Home">
      <GlobalContext.Provider value={{recipes, setRecipes}}>
        <SearchBar />
        <Recipes />
      </GlobalContext.Provider>
  </div>
  )
}

export default Home;