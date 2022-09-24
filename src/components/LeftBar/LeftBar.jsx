import "./leftBar.css";
import { DiReact } from "react-icons/di";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";

function LeftBar() {
  return (
    <div className="leftBar">
      <ul className="topMenu">
        <li>
          <a href="/" rel="noreferrer">
            <AiOutlineHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/" rel="noreferrer">
            <AiOutlineSearch />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="/" rel="noreferrer">
            <AiOutlineHeart />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a href="/" rel="noreferrer">
            <BsCameraReels />
            <span>Watchlist</span>
          </a>
        </li>
      </ul>
      <div className="bottomMenu">
        <DiReact />
        <p>
          Made by {""}
          <a href="https://github.com/nicoc12024" rel="noreferrer" target="_blank">
            Nicolas Cabello
          </a>
        </p>
      </div>
    </div>
  );
}
export default LeftBar;
