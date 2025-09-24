import { useState } from "react";
import Carousel from "../../component/carousel";
import Container from "../../component/container";
import Header from "../../component/header";
import HeroSection from "../../component/hero-section";

function Home() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  
  return (
    <div>
      <Header />
      <HeroSection url="https://api.themoviedb.org/3/movie/upcoming?api_key=a10ee5569194b352bcca20840b7f8a32" />
      <Container>
        <Carousel
          heading={"Trending"}
          url="https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US"
        />
        <Carousel
          heading={"Comedy Movies"}
          url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=35"
        />
        <Carousel
          heading={"Top Rated"}
          url="https://api.themoviedb.org/3/movie/top_rated?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US"
        />
        <Carousel
          heading={"Action Movies"}
          url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=28"
        />
        <Carousel
          heading={"Horror movies"}
          url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=27"
        />
        <Carousel
          heading={"Romance movies"}
          url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=10749"
        />
      </Container>
    </div>
  );
}

export default Home;
