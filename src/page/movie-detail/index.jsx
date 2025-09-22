import { useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../component/header";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Tag from "../../component/tag";
import CastCard from "../../component/cast-card";
import Container from "../../component/container";
import VideoCard from "../../component/video-card";
import Carousel from "../../component/carousel";

function MovieDatail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [credits, setCredits] = useState({});
  const [videos, setVideos] = useState({});

  const fetchMoviDetail = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setMovieDetail(response.data);
  };

  const fetchCredits = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setCredits(response.data);
  };

  const fetchVideos = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setVideos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchMoviDetail();
    fetchCredits();
    fetchVideos();
  }, [movieId]);

  return (
    <div className="movie-detail">
      <Header />
      <div className="movie-detail__banner">
        <img
          className="bg-blur"
          src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
          alt=""
        />

        <div className="content">
          <div className="content__inside">
            <div className="left">
              <img
                src={
                  movieDetail?.poster_path
                    ? `https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`
                    : "https://movie-eta-sage.vercel.app/assets/no-poster-af8294eb.png"
                }
                alt=""
              />
            </div>
            <div className="right">
              <h1>{movieDetail?.title}</h1>
              <p className="tagLine">{movieDetail?.tagline}</p>
              {movieDetail.genres?.map((genre) => (
                <Tag key={genre?.id}>{genre?.name}</Tag>
              ))}

              <div className="row">
                <div className="circleRating">
                  <CircularProgressbar
                    value={movieDetail.vote_average}
                    maxValue={10}
                    text={movieDetail.vote_average?.toFixed(1)}
                    styles={buildStyles({
                      pathColor:
                        movieDetail.vote_average < 5
                          ? "red"
                          : movieDetail.vote_average < 7
                          ? "orange"
                          : "green",
                    })}
                  />
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${videos.key}`}
                  target="_blank"
                  className="playBut"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="96.0053px"
                    height="96.0053px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="triangle"
                      id="XMLID_18_"
                      fill="none"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      className="circle"
                      id="XMLID_17_"
                      fill="none"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>

                  <p>Watch Trailer</p>
                </a>
              </div>

              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
              <div className="box">
                <div className="info">
                  <span className="label">Status:</span>
                  <span className="value">{movieDetail.status}</span>
                </div>
                <div className="info">
                  <span className="label">Release Date:</span>
                  <span className="value">{movieDetail.release_date}</span>
                </div>
                <div className="info">
                  <span className="label">Runtime:</span>
                  <span className="value">{movieDetail.runtime}</span>
                </div>
              </div>
              <div className="box">
                <div className="info">
                  <span className="label">Director:</span>
                  <span className="value">
                    {credits.crew?.filter(
                      (item) => item.job === "Director"
                    )[0] &&
                      credits.crew?.filter((item) => item.job === "Director")[0]
                        .name}
                  </span>
                </div>
              </div>
              <div className="box">
                <div className="info">
                  <span className="label">Writer:</span>
                  <span className="value">
                    {credits.crew
                      ?.filter(
                        (item) =>
                          item.department === "Writing" &&
                          (item.job === "Screenplay" ||
                            item.job === "Writer" ||
                            item.job === "Story")
                      )
                      .map((i) => i?.name)
                      .join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Container>
            <h2 className="container__title">Top Cast</h2>
            <Swiper
              className="top-cast-section"
              breakpoints={{
                0: { slidesPerView: 1 },
                225: { slidesPerView: 2 },
                327: { slidesPerView: 3 },
                440: { slidesPerView: 4 },
                540: { slidesPerView: 5 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
            >
              {credits.cast?.slice(0, 200).map((item) => (
                <SwiperSlide>
                  <CastCard
                    image={item.profile_path}
                    name={item.name}
                    subName={item.character}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <h2>Official Videos</h2>
            <Swiper
              className="video-section"
              breakpoints={{
                0: { slidesPerView: 1 },
                315: { slidesPerView: 2 },
                850: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              spaceBetween={80}
            >
              {videos.results?.slice(0, 200).map((item) => (
                <SwiperSlide>
                  <VideoCard img={item.key} name={item.name} url={item.key} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Carousel
              heading={"Similar Movies"}
              url={`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=a10ee5569194b352bcca20840b7f8a32`}
            />

            <Carousel
              heading={"Recommendations"}
              url={`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=a10ee5569194b352bcca20840b7f8a32`}
            />
          </Container>
        </div>

        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default MovieDatail;
