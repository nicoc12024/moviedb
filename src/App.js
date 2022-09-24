import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <>
      <LeftBar />
      <div className="marginLeft">
        <TopBar />
        <Hero />
        <Catalog />
      </div>
    </>
  );
}

export default App;
