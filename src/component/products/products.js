import {RiArrowDropRightLine,RiArrowDropLeftLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './products.scss'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {SelectProduct} from '../../features/productSlice'
import {useTranslation} from 'react-i18next'
import mark from '../../images/mark.png'

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

export default function Category({cag,title}) {
    const { dispatch } = useContext(MenuContext);
	const products = useSelector(SelectProduct);
	const { t, i18n } = useTranslation();
	function Error(e){
		e.target.onerror = null
        e.target.src = mark
	} 
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
			 
              <Carousel 
                responsive={responsive}
				rtl={i18n.language === 'ar'?true:false}
                autoPlay={false}
			    className='swiper'
              >
             
              {products
                    .filter((filter) => filter.category === cag)
                    .map((product)=>{
                       
                        return(
                           <div key={product.id} className='product'>
                            <Link to={`/product/${product.id}`} key={product.id} onClick={() => dispatch({ type: "open" })}>
                              <img src={product.image} onError={Error} alt={product.id} className='img'/>
                              <h6 className='prodName'>{product.product}-{product.desc}</h6>
                              <h6  className={i18n.language === 'ar'?"price rtl":'price'}>{product.price} {t("DA")} </h6>
                            </Link>
                           </div> 
                             )
                        })
                     }
               
              
            </Carousel> 
            
            </div>
   )
    
}