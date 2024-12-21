import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlide = ({ image }) => {
  return (
    <div className="gallery-slide group">
      <img
        src={image.url}
        alt={image.title}
        className="gallery-image group-hover:scale-110"
      />
      <div className="image-overlay bg-gradient-to-t from-black/70 to-transparent p-6">
        <h3 className="image-title text-xl font-semibold text-white mb-2">
          {image.title}
        </h3>
        <p className="image-description text-white/90 text-sm">
          {image.description}
        </p>
      </div>
    </div>
  );
};

export default GallerySlide;