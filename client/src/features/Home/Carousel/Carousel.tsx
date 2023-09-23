import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function CustomCarousel() {
  return (
    <Swiper
      navigation={true}
      spaceBetween={30}
      loop={true}
      pagination={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide className='text-center'>
        <img className='w-full !h-[650px]' src='./images/jewelry.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full !h-[650px]' src='./images/mens.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className='w-full !h-[650px]'
          src='./images/electronics.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
}
