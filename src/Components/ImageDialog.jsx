import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageDialog({ images }) {
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="w-full h-full max-w-2xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imgUrl}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[50vh] h-[30vh] object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageDialog;
