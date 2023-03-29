import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true)
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=25c6a9ee`
      );
      setMovie(response.data);
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    }
    fetchMovie();
  }, [id]);


  return (
    <>
      <Nav />
     {
      loading ? 
      (<div className="movie__details--container">
        <div className="left__column--details">
          <div className="poster__details--skeleton" alt="" />
        </div>

        <div className="right__column--details">
          <h2 className="title__details--skeleton"></h2>
          <div className="details__column">
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton--cast"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton--plot"></h4>
            <h4 className="h4__skeleton--plot--final"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton--genre"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton--director"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton"></h4>
            <h3 className="h3__skeleton"></h3>
            <h4 className="h4__skeleton"></h4>
            <div className="rating__details">
              <div className="rating">
                <h3 className="h3__skeleton"></h3>
                <h4 className="h4__skeleton"></h4>
              </div>
              <div className="rating">
                <h3 className="h3__skeleton"></h3>
                <h4 className="h4__skeleton"></h4>
              </div>
              <div className="rating">
                <h3 className="h3__skeleton"></h3>
                <h4 className="h4__skeleton"></h4>
              </div>
            </div>
          </div>
        </div>
      </div>) :(
        <div className="movie__details--container">
          <div className="left__column--details">
            <img className="poster__details" src={movie.Poster} alt="" />
          </div>

          <div className="right__column--details">
            <h2 className="title__details">{movie.Title}</h2>
            <div className="details__column">
              <h3>Cast:</h3>
              <h4>{movie.Actors}</h4>
              <h3>Released:</h3>
              <h4>{movie.Released}</h4>
              <h3>Plot:</h3>
              <h4>{movie.Plot}</h4>
              <h3>Genre:</h3>
              <h4>{movie.Genre}</h4>
              <h3>Director:</h3>
              <h4>{movie.Director}</h4>
              <h3>Language:</h3>
              <h4>{movie.Language}</h4>
              <h3>Duration:</h3>
              <h4>{movie.Runtime}</h4>
              <div className="rating__details">
                <div className="rating">
                  <h3>Metascore:</h3>
                  <h4>{movie.Metascore}/100</h4>
                </div>
                <div className="rating">
                  <h3>Rotten Tomatoes:</h3>
                  <h4>{movie.Ratings.find(rating => rating.Source === "Rotten Tomatoes")?.Value}</h4>
                </div>
                <div className="rating">
                  <h3>IMDb:</h3>
                  <h4>{movie.imdbRating}/10</h4>
                </div>                
              </div>
            </div>
          </div>
        </div>
      )
     }
    </>
  );
};

export default MovieDetails;
