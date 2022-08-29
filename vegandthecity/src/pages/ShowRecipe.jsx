import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ShowRecipe() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col pb-36">
        <Header />
        <RecipeDetails />
      </div>
      <Footer />
    </div>
  );
}
