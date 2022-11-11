import {RiArrowDropRightLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux'
import { Typography , Container} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from '../../Library/stock'
import './products.scss'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 6,
  },
};

export default function Category({cag,title}) {

   return(
          <div className='category'>
             
              <div className='headProd' style={{backgroundColor: '#17A8D6'}}>
                  <h6 className='categoryName'>{title}</h6>
                   <Link to={`/${cag}`}>
                    <div className='headProdRight'>
                       <h6>Voir plus</h6>
					   <RiArrowDropRightLine />
                    </div>
                 </Link>
              </div>
              <Carousel 
              responsive={responsive}
              autoPlay={false}
			  className='swiper'
            >
              
              {Data
                    .filter((filter) => filter.category === cag)
                    .map((product)=>{
                      
                        return(
                           <div key={product.id} className='product'>
                            <Link to={`/product/${product.id}`} key={product.id}>
                              <img src={product.image} className='img'/>
                              <h6 className='prodName'>{product.product}-{product.desc}</h6>
                              <h6 className='price'>{product.price} DA</h6>
                            </Link>
                           </div> 
                             )
                        })
                     }
               

            </Carousel> 
            
            </div>
   )
    
}