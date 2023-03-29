import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../component/Nav";

const Movies = () => {
  const location = useLocation();
  const [movieName, setMoviename] = useState("");
  const [movies, setMovies] = useState([]);
  const [sortMovies, setSortMovies] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchMovies(searchValue) {
    setLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee&s=${searchValue}`
    );
    setMovies(response.data.Search);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    const searchValue = new URLSearchParams(location.search).get("search");
    if (searchValue) {
      setMoviename(searchValue);
      fetchMovies(searchValue);
    }
  }, [location]);

  const handleSortMovie = (event) => {
    const value = event.target.value;
    setSortMovies(value);
    let sortedMovies = [...movies];
    if (value === "NEW_TO_OLD") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (value === "OLD_TO_NEW") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    setMovies(sortedMovies);
  };

  return (
    <div>
      <Nav />
      <div className="row">
        <h2>Search Movies</h2>

        <div className="search__container">
          <input
            type="search"
            className="search"
            placeholder="E.g. John Wick"
            id="search__input"
            value={movieName}
            onChange={(event) => setMoviename(event.target.value)}
            onKeyPress={(event) => {
              if(event.key === "Enter"){
                fetchMovies(movieName);
              }
            }}
          />
          <button
            className="search__button"
            id="search__button"
            onClick={() => fetchMovies(movieName)}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>

        <div className="search__results">
          <h3>Your movies:</h3>
          <select id="filter" onChange={handleSortMovie} value={sortMovies}>
            <option value="" disabled selected>
              Sort
            </option>
            <option value="OLD_TO_NEW">Year : Latest to Oldest</option>
            <option value="NEW_TO_OLD">Year : Oldest to Latest</option>
          </select>
        </div>

        <div className="movies">
          {loading ? (
            new Array(9).fill(0).map((_, index) => (
              <>
                <div className="movie" key={index}>
                  <figure className="movie__img--wrapper">
                    <div className="movie__img--skeleton" />
                  </figure>
                  <div className="movie__title">
                    <h3 className="movie__title--skeleton"></h3>
                  </div>
                  <div className="movie__year">
                    <p className="movie__year--skeleton"></p>
                  </div>
                </div>
              </>
            ))
          ) : movies ? (
            movies.map((movie) => {
              return (
                <div className="movie">
                <Link to={`/movie/${movie.imdbID}`}>
                  <figure className="movie__img--wrapper">
                    <img src={movie.Poster} className="movie__img" />
                  </figure>
                  <div className="movie__title">
                    <h3>{movie.Title}</h3>
                  </div>
                  <div className="movie__year">
                    <p>{movie.Year}</p>
                  </div>
                </Link>
                </div>
              );
            })
          ) : (
            <p className="no__movies">No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
