import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";
import MovieCard from "../movie-card";
import Tag from "../tag";

export default function Carousel({ heading, url }) {
  const [movies, setMovies] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(url);
    setMovies(response.data.results);
  };

  const fetchGenreMovie = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a10ee5569194b352bcca20840b7f8a32"
    );
    setGenreMovie(response.data.genres);
  };

  useEffect(() => {
    fetchMovies();
    fetchGenreMovie();
  }, [url]);

  return (
    <div className="carousel">
      <h2>{heading}</h2>
      <Swiper
        className="carousel__swiper"
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          200: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={20}
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <MovieCard
              name={movie.title ? movie.title : movie.name}
              description={
                movie.release_date ? movie.release_date : movie.first_air_date
              }
              imgUrl={movie.poster_path}
              id={movie.id}
              vote={movie.vote_average}
              check={true}
            >
              <div className="genre-tag">
                {movie.genre_ids
                  .slice(0, 2)
                  .map((genre_id) =>
                    genreMovie
                      .filter((genres) => genres.id === genre_id)
                      .map((item) => <Tag>{item.name}</Tag>)
                  )}
              </div>
            </MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
