import { Link } from "react-router-dom";
import "./index.scss";
import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <div className="header__warrper">
      <div className="header">
        <Link to={"/"} className="header__logo">
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            alt=""
          />
        </Link>
        <ul className="header__nav">
          <li>
            <p>Movies</p>
          </li>
          <li>
            <p>TV Shows</p>
          </li>
          <li>
            <BsSearch />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
