import {RiArrowDropRightLine,RiArrowDropLeftLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {MenuContext} from '../../context/menuContext'
import { useContext, useEffect, useState } from "react";
import {useTranslation} from 'react-i18next'
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderCategory.scss'
import { Data } from "../../Library/data";


export default function SliderCategory({cag,title,prod}) {
  const { dispatch } = useContext(MenuContext);
  const { t, i18n } = useTranslation();
  const [product, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const skeletonProducts = [];
  SwiperCore.use([EffectFlip, Navigation, Pagination]);

  // skelton loading before get a products from api 
  for (let i = 0; i < 6; i++) {
    skeletonProducts.push(
      <div key={i} className='productSkelton'>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </div>
    );
  }


  // get products from api 
  useEffect(() => {
    setProd(Data)   
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [prod]);


    return(
          <div className='category'>            
              <div className='headProd' style={{backgroundColor: '#17A8D6'}}>
                  <h6 className='categoryName'>{t(title)}</h6>
                   <Link to={`/${cag}`}>
                    <div className='headProdRight'>
                       <h6>{t('Voir plus')}</h6>
					            {i18n.language === 'ar'?<RiArrowDropLeftLine/>:<RiArrowDropRightLine/>}   
                    </div>
                 </Link>
              </div>
            {!loading?
             <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation
            >
              {product
                    .filter((filter) => filter.category === cag & filter._id !== prod)
                    .map((product)=>{                     
                        return(
                           <SwiperSlide key={product._id} className='product'>
                            <Link to={`/product/${product._id}`} key={product._id} onClick={() => dispatch({ type: "open" })}>
                              <img src={product.images[0].url} onError={Error} alt={product._id} className='img'/>
                              <h6 className='prodName'>{product.name}-{product.desc}</h6>
                              <h6  className={i18n.language === 'ar'?"price rtl":'price'}>{product.price} {t("DA")} </h6>
                            </Link>
                           </SwiperSlide> 
                             )
                        })
             }  
            </Swiper>:<div className="listSkelton">{skeletonProducts}</div>}
                      
            </div>
   )
    
}
