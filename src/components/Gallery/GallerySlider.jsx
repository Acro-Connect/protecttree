import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GallerySlide from './GallerySlide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="gallery-swiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <GallerySlide image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;