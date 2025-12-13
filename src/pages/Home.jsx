import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    if (loading) return;
    setLoading(true);

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      setError("failed to search Movie");
      console.log(err);
    } finally {
      setLoading(false);
    }

    setsearchQuery(" ");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">loading...</div>
        ) : (
          <>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
