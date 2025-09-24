import { Link } from "react-router-dom";
import "./index.scss";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((o) => !o);

  return (
    <div className="header__warrper">
      <div className="header">
        <Link to={"/"} className="header__logo">
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            alt=""
          />
        </Link>
        <ul className={`header__nav ${open ? `mobileView` : ""}`}>
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

        <div className="header__mobile">
          <BsSearch />
          <div onClick={toggleMenu}>
            {open ? (
              <AiOutlineClose></AiOutlineClose>
            ) : (
              <HiOutlineBars4></HiOutlineBars4>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
