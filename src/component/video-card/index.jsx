import React from "react";
import "./index.scss";

function VideoCard({ img, name, url }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${url}`} target="_blank">
      <div className="video-card">
        <div className="video-card__thumbnail">
          <img src={`https://img.youtube.com/vi/${img}/mqdefault.jpg`} alt="" />

          <div href="#" className="playBut">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="60px"
              height="60px"
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
          </div>
        </div>
        <div className="video-card__title">{name}</div>
      </div>
    </a>
  );
}

export default VideoCard;
