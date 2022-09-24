import "./main.css";
import LeftBar from "./../LeftBar/LeftBar";
import TopBar from "./../TopBar/TopBar";
import WishList from "./../WishList/WishList";
import { Routes, Route } from "react-router-dom";
import Hero from "./../Hero/Hero";
import Catalog from './../Catalog/Catalog';

function Main() {
  return (
    <>
      <LeftBar />
      <div className="marginLeft">
        <TopBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Catalog/>
            </>
          } />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
    </>
  );
}
export default Main;
