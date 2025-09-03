'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';



interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductMobileSlideshow = ( { images, title, className }: Props ) => {


  return (
    <div className={ className }>

      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={ [ FreeMode, Autoplay, Pagination ] }
        className="mySwiper2"
      >

        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <div className="w-full h-full bg-transparent flex items-center justify-center">
                <Image
                  width={ 600 }
                  height={ 500 }
                  src={ `/products/${ image }` }
                  alt={ title }
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>

          ) )
        }
      </Swiper>



    </div>
  );
};