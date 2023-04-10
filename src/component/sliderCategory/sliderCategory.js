import {RiArrowDropRightLine,RiArrowDropLeftLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './sliderCategory.scss'
import {MenuContext} from '../../context/menuContext'
import { useContext, useEffect, useState } from "react";
import {useTranslation} from 'react-i18next'
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';


// responsive react-multi-carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1000, min: 800 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};

export default function SliderCategory({cag,title,prod}) {
  const { dispatch } = useContext(MenuContext);
	const { t, i18n } = useTranslation();
  const [product, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://dashboard-api-v8p2.onrender.com";
  const skeletonProducts = [];


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
    axios.get(`${api}/products`)
      .then(res => {
        setProd(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
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
              <Carousel 
                responsive={responsive}
				        rtl={i18n.language === 'ar'?true:false}
                autoPlay={false}
			          className='swiper'
              >
              {product
                    .filter((filter) => filter.category === cag & filter._id !== prod)
                    .map((product)=>{                     
                        return(
                           <div key={product._id} className='product'>
                            <Link to={`/product/${product._id}`} key={product._id} onClick={() => dispatch({ type: "open" })}>
                              <img src={product.images[0].url} onError={Error} alt={product._id} className='img'/>
                              <h6 className='prodName'>{product.name}-{product.desc}</h6>
                              <h6  className={i18n.language === 'ar'?"price rtl":'price'}>{product.price} {t("DA")} </h6>
                            </Link>
                           </div> 
                             )
                        })
                     } 
            </Carousel>:
              <div className="listSkelton">{skeletonProducts}</div>
             }          
            </div>
   )
    
}