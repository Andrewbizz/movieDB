import React from "react";
import "../css/MovieCard.css";
import * as Icon from "lucide-react";

function MovieCard({ movie }) {
  function onFavouriteClick(e) {
    console.log(e.target);
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
          <button className="favourite-btn" onClick={onFavouriteClick}>
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
