import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const YoutubeSliderItem = ({ youtube }) => {
  return (
    <img
      src={youtube.snippet.thumbnails.medium.url}
      alt={youtube.snippet.title}
    />
  );
};

const YoutubeSlider = ({ youtubes }) => {
  return (
    <section className="youtube__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide="3"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeSliderItem key={index} youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default YoutubeSlider;
