import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from "./data";
import './banner.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";



function Carousel(){
    
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
       {Banner.map((item)=>{
               const {id,img}=item;
               return(
                   <SwiperSlide key={id} className='listImg'>
                       <img src={img} className='listImg' />
                   </SwiperSlide>
                   
               )
           })}
     </Swiper>
	 </div>
    )
}
export default Carousel;