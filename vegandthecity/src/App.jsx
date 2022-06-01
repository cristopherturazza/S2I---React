import React from "react";
import Home from "./pages/Home";
import ShowRecipe from "./pages/ShowRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col bg-stone-50 antialiased  text-stone-900 h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<ShowRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
