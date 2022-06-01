import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import Recipes from '../components/Recipes';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalContext';         

function Home() {

  const [recipes, setRecipes] = useState([]); // searched recipes

  return (  
    <div className="flex flex-col">
      <GlobalContext.Provider value={{recipes, setRecipes}}>
        <Header />
        <SearchBar />
        <Recipes />
      </GlobalContext.Provider>
  </div>
  )
}

export default Home;