import "./leftBar.css";
import { DiReact } from "react-icons/di";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div className="leftBar">
      <ul className="topMenu">
        <li>
          <Link to="/">
            <AiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <AiOutlineHeart />
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <BsCameraReels />
            <span>Watchlist</span>
          </Link>
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
