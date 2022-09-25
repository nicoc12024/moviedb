import "./main.css";
import LeftBar from "./../LeftBar/LeftBar";
import TopBar from "./../TopBar/TopBar";
import WatchList from "./../WatchList/WatchList";
import { Routes, Route } from "react-router-dom";
import Hero from "./../Hero/Hero";
import Catalog from "./../Catalog/Catalog";
import FavoriteList from "../FavoriteList/FavoriteList";

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
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </div>
    </>
  );
}
export default Main;
