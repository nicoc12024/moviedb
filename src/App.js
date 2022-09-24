import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Hero from "./components/Hero/Hero";
import WishList from "./components/WishList/WishList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LeftBar />
      <div className="marginLeft">
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

// <LeftBar />
//       <div className="marginLeft">
//         <TopBar />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/wishlist" element={<WishList />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
