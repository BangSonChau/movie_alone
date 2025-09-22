import { useEffect, useState } from "react";
import "./index.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

function MovieCard({ imgUrl, name, description, children, vote, id, check }) {
  const date = new Date(description);
  // Đổi sang định dang "MM,DD, YYYY"
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formatted = date.toLocaleDateString("en-US", options);

  const [newName, setNewName] = useState("");

  const checkName = () => {
    if (name && name.length > 20) {
      setNewName(name.slice(0, 16) + "...");
    } else {
      setNewName(name || "");
    }
  };

  useEffect(() => {
    checkName();
  }, [newName]);

  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <div className="movie-card__tag">
        <img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/original${imgUrl}`
              : "https://movie-eta-sage.vercel.app/assets/no-poster-af8294eb.png"
          }
          alt=""
        />

        {children}

        {check ? (
          <div className="circleRating">
            <CircularProgressbar
              value={vote}
              maxValue={10}
              text={vote?.toFixed(1)}
              styles={buildStyles({
                pathColor: vote < 5 ? "red" : vote < 7 ? "orange" : "green",
              })}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <h3>{newName}</h3>
      <p>{formatted}</p>
    </Link>
  );
}

export default MovieCard;
