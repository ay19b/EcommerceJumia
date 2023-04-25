import React, { useState,useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from "./data";
import './banner.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Skeleton from '@mui/material/Skeleton';

function Carousel(){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(true)
        setData(Banner)
      },1500)
    })


    return(
	<div className='banner'>
     {loading?
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{clickable: true}}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
        loop
        className='swiper-container'
      >
       {data.map((item)=>{
               const {id,img}=item;
               return(
                   <SwiperSlide key={id} className='listImg'>
                       <img src={img} alt={id} className='listImg' />
                   </SwiperSlide>                  
               )
           })}
      </Swiper>:(<Skeleton variant="rectangular" height="100%" />)}
	 </div>
    )
}
export default Carousel;