import React from "react";
import "../css/MovieCard.css";
import * as Icon from "lucide-react";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFav, removeFav } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) removeFav(movie.id);
    else addToFav(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        {/* <h3>{movie.title}</h3> */}

        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favorite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            <Icon.Heart />
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
