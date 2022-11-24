import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { Autoplay, Pagination } from "swiper";

function UnsplashRandom({ image }) {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`}>
      <img src={image.urls.regular} alt={image.description} />
    </a>
  );
}

const UnsplashSlider = ({ images }) => {
  return (
    <section className="unsplash__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <UnsplashRandom key={index} image={image} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default UnsplashSlider;
