import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import {useTranslation} from 'react-i18next'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 1000, min: 800 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3
  }
};


function Pub(){
    const { t, i18n } = useTranslation();
    return(
	<div className='pub'>
	    
            <Carousel 
              responsive={responsive}
			  rtl={i18n.language === 'ar'?true:false}
              autoPlay={false}
            >
             {pub.map((item)=>{
               const {id,img}=item;
               return(
                   
                       <img src={img} alt={id} className='listImg' />

                   
               )
           })}
           </Carousel>   
        		   
	 </div>
    )
}
export default Pub;







