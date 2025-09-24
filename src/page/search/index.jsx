import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/header";
import Container from "../../component/container";
import MovieCard from "../../component/movie-card";
import "./index.scss";

function Search() {
  const { keyWord } = useParams();
  const [movies, setMovies] = useState([]);

  const fetchSearchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${keyWord}&page=1&api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [keyWord]);

  return (
    <div>
      <Header />

      <Container>
        <div className="search-page">
          <h2>Search results of '{keyWord}'</h2>

          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard
                name={movie.title ? movie?.title : movie?.name}
                description={
                  movie.release_date ? movie.release_date : movie.first_air_date
                }
                imgUrl={movie.poster_path}
                id={movie.id}
                vote={movie.vote_average}
                check={false}
              ></MovieCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
