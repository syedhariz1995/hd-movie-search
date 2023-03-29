import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerImg from "../assets/undraw_home_cinema_l7yl.svg";
import loadingImg from "../assets/undraw_searching_re_3ra9.svg"

const Header = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/movies?search=${searchMovie}`);
  };

  const handleSearchFocus = () => {
    setIsSearching(true)
  }

  const handleBlur = () => {
    setIsSearching(false)
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <h1>
            Watch any movies in <span className="hd-color">HD Quality!</span>
          </h1>
          <h3 className="main__sub--title">Search for your desired movies!</h3>

          <div className="search__container">
            <input
              type="search"
              className="search"
              placeholder="E.g. John Wick"
              id="search__input"
              value={searchMovie}
              onChange={(event) => setSearchMovie(event.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleBlur}
              onKeyPress={(event) => {
                if(event.key === "Enter"){
                  handleSearch();
                }
              }}
            />
            <button
              className="search__button"
              id="search__button"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <figure>
  <img
    className={isSearching ? "header__img--searching" : "header__img"}
    src={isSearching ? loadingImg : headerImg}
    alt=""
  />
</figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
