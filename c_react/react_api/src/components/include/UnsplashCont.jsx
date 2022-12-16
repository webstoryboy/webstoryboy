import React from "react";

const UnsplashItem = ({ image }) => {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${image.id}`}>
        <img src={image.urls.regular} alt={image.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {images.map((image, index) => (
              <UnsplashItem key={index} image={image} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashCont;
