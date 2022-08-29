import SearchBar from "../components/SearchBar/SearchBar";
import Recipes from "../components/Recipes/Recipes";
import Header from "../components/Header/Header";
import NavFootButtons from "../components/NavFootButtons/NavFootButtons";
import Footer from "../components/Footer/Footer";

export default function ShowSearched() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="flex flex-col pb-36">
          <Header />
          <Recipes />
          <SearchBar title={"Search Another Recipe"} />
          <NavFootButtons />
        </div>
        <Footer />
      </div>
    </>
  );
}
