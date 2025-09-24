import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    keyWord && navigate(`/search/${keyWord}`);
  };

  const toggleMenu = () => {
    setOpenMenu((o) => !o);
  };

  const toggleSearch = () => {
    setOpenSearch((o) => !o);
  };

  const handleCloseSearch = () => {
    setOpenSearch((o) => !o);
  };

  useEffect(() => {
    if (openSearch) {
      setOpenMenu(false);
    }
  }, [openSearch]);

  useEffect(() => {
    if (openMenu) {
      setOpenSearch(false);
    }
  }, [openMenu]);

  return (
    <div className="header__warrper">
      <div className="header">
        <Link to={"/"} className="header__logo">
          <img
            src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
            alt=""
          />
        </Link>

        <ul className={`header__nav ${openMenu ? `mobileView` : ""}`}>
          <li>
            <p>Movies</p>
          </li>
          <li>
            <p>TV Shows</p>
          </li>
          <li>
            <BsSearch onClick={toggleSearch}></BsSearch>
          </li>
        </ul>

        <div className="header__mobile">
          <BsSearch onClick={() => toggleSearch()}></BsSearch>
          <div onClick={toggleMenu}>
            {openMenu ? <AiOutlineClose /> : <HiOutlineBars4 />}
          </div>
        </div>

        <div
          className={`header__searchMobile ${openSearch && `mobileSearch`}  ${
            !openSearch && `mobileCloseSearch`
          } `}
        >
          <input
            type="text"
            placeholder="Search for a movie of tv show..."
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          />
          <AiOutlineClose onClick={handleCloseSearch}></AiOutlineClose>
        </div>
      </div>
    </div>
  );
}

export default Header;
