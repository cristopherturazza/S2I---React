import React from 'react';
import './css/App.css';
import Home from './pages/Home'; 
import ShowRecipe from './pages/ShowRecipe'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    
  <div className="App">

  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/recipe" element={<ShowRecipe/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
    
  </div>
  
  )
}

export default App;

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
