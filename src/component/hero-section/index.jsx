import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HeroSection({ url, disableInput }) {
  const [imgUrl, setImgUrl] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const navigate = useNavigate();

  const fetchImageMovie = async () => {
    const response = await axios.get(url);
    setImgUrl(response.data.results || []);
  };

  const handleSearch = () => {
    keyWord && navigate(`/search/${keyWord}`);
  };

  useEffect(() => {
    if (!url) return;
    fetchImageMovie();
  }, [url]);

  // Khi imgUrl thay đổi, chọn số lượng ảnh 1 lần
  useEffect(() => {
    if (imgUrl.length === 0) return;
    const count = Math.max(1, Math.floor(Math.random() * imgUrl.length)); // chọn ít nhất 1
    setSelectedImages(imgUrl.slice(0, count));
  }, [imgUrl]);

  return (
    <div className="hero-section">
      {selectedImages.map((item) => (
        <img
          key={item.id || item.backdrop_path}
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt=""
        />
      ))}

      <div className="hero-section__content">
        <h1>Welcome</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a movie of tv show..."
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
            disabled={disableInput}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
}

export default HeroSection;
