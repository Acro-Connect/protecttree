import React from 'react';
import GallerySlider from './GallerySlider';
import { galleryImages } from './GalleryData';

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness our journey in protecting and preserving forests through community engagement,
            education, and active conservation efforts.
          </p>
        </div>
        <GallerySlider images={galleryImages} />
      </div>
    </section>
  );
};

export default Gallery;