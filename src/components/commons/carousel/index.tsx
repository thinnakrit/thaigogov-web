'use client';

import { v4 as uuid } from 'uuid';
import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ items }: { items: { content: ReactNode }[] }) => {
  return (
    <Swiper
      // slidesPerView={1}
      spaceBetween={20}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3.9,
          spaceBetween: 50
        }
      }}
    >
      {items.map((item) => {
        return <SwiperSlide key={uuid()}>{item.content}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;
