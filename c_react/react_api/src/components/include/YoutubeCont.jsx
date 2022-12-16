import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
      <span>{youtube.snippet.title}</span>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
