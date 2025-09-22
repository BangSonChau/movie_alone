import "./index.scss";

function CastCard({ image, name, subName }) {
  return (
    <div className="cast-card">
      <div className="cast-card__image">
        <img
          src={
            image
              ? `https://image.tmdb.org/t/p/original${image}`
              : "https://movie-eta-sage.vercel.app/assets/avatar-bd5ec287.png"
          }
          alt=""
        />
      </div>
      <div className="cast-card__info">
        <h4 className="cast-card__info--name">{name}</h4>
        <p className="cast-card__info--subname">{subName}</p>
      </div>
    </div>
  );
}

export default CastCard;
