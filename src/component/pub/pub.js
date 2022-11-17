import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import {Container} from '@mui/material'



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
  
    return(
	<div className='pub'>
	    
            <Carousel 
              responsive={responsive}
              autoPlay={false}
            >
             {pub.map((item)=>{
               const {id,img}=item;
               return(
                   
                       <img src={img} className='listImg' />

                   
               )
           })}
           </Carousel>   
        		   
	 </div>
    )
}
export default Pub;







