import Header from "../components/Header/Header";
import FavoritesPanel from "../components/FavoritesPanel/FavoritesPanel";
import Footer from "../components/Footer/Footer";

export default function Favorites() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="flex flex-col pb-36">
          <Header />
          <FavoritesPanel />
        </div>
        <Footer />
      </div>
    </>
  );
}
