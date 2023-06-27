import React, { useState} from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from "./data";
import './banner.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Blurhash } from 'react-blurhash';

function Carousel(){
    const [data, setData] = useState(Banner);
    const [loading, setLoading] = useState(false);

    const handleImageLoad = () => {
      setLoading(true);
    };
  


    return(
	<div className='banner'>
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
               const {id,img,blurHash}=item;
               return(
                   <SwiperSlide key={id} className='listImg'>
			                 {!loading && <Blurhash hash={blurHash} className="listImg" />}
                       <img 
                         src={img}
                         alt={id}
                         className='listImg'
                         onLoad={handleImageLoad}
                         style={{ display: loading ? 'block' : 'none' }}/>
                   </SwiperSlide>                  
               )
           })}
      </Swiper>
	 </div>
    )
}
export default Carousel;