import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/* eslint-disable @typescript-eslint/no-explicit-any */

// Import Swiper styles

const DressGallery: React.FC = () => {
  // Array of different image sizes
  const images: any[] = [
    { id: 1, src: '/images/dress/wed boho 1.jpg' },
    { id: 2, src: '/images/dress/wed boho 2.jpg' },
    { id: 3, src: '/images/dress/wed boho 3.jpg' },
    { id: 4, src: '/images/dress/colour 1.jpg' },
    { id: 5, src: '/images/dress/wed boho 4.jpg' },
    { id: 6, src: '/images/dress/wed boho 5.jpg' },
    { id: 7, src: '/images/dress/wed boho 6.jpg' },
    { id: 8, src: '/images/dress/colour 2.jpg' },
    { id: 9, src: '/images/dress/wed boho 7.jpg' },
    { id: 10, src: '/images/dress/wed boho 8.jpg' },
    { id: 11, src: '/images/dress/wed boho 9.jpg' },
    { id: 12, src: '/images/dress/wed boho 10.jpg' },
    { id: 13, src: '/images/dress/colour 3.jpg' },
    { id: 14, src: '/images/dress/wed boho 11.jpg' },
    { id: 15, src: '/images/dress/wed boho 12.jpg' },
    { id: 16, src: '/images/dress/wed boho 13.jpg' },
    { id: 17, src: '/images/dress/wed boho 14.jpg' },
    { id: 18, src: '/images/dress/wed boho 15.jpg' },
    { id: 19, src: '/images/dress/wed boho 16.jpg' },
    { id: 20, src: '/images/dress/wed boho 17.jpg' },
  ];

  return (
    <div className='w-full p-4'>
      {/* Swiper Slider */}
      <Swiper
        navigation={true} // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Add modules
        className='mySwiper'
        spaceBetween={10}
        loop
        slidesPerView={1}
        breakpoints={{
          640: {
            // For small devices
            slidesPerView: 1,
          },
          768: {
            // For medium devices
            slidesPerView: 2,
          },
          1024: {
            // For large devices
            slidesPerView: 3,
          },
        }} // Change this to adjust the number of slides shown at once
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className='h-[75vh] mg:h-[80vh] object-cover'>
              <Image
                src={image.src}
                alt={`Gallery item ${idx + 1}`}
                width={400} // Set a standard width
                height={500}
                quality={100}
                unoptimized // Set a standard height
                className='w-full h-auto min-h-full object-cover object-center rounded-lg shadow-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DressGallery;
