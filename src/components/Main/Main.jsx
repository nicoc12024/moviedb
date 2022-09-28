import "./main.css";
import LeftBar from "./../LeftBar/LeftBar";
import TopBar from "./../TopBar/TopBar";
import WatchList from "../LeftBarActions/WatchList/WatchList";
import { Routes, Route } from "react-router-dom";
import Hero from "./../Hero/Hero";
import Catalog from "./../Catalog/Catalog";
import FavoriteList from "../LeftBarActions/FavoriteList/FavoriteList";
import GenreContainer from "./../Genre/GenreContainer/GenreContainer";

function Main() {
  return (
    <>
      <LeftBar />
      <div className="marginLeft">
        <TopBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Catalog />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/favorites" element={<FavoriteList />} />
          <Route path="/searchbygenre" element={<GenreContainer />} />
        </Routes>
      </div>
    </>
  );
}
export default Main;
