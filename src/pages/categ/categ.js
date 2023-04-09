import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import './catg.scss'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {SelectProduct} from '../../redux/productSlice'
import {useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import mark from '../../images/mark.png'
import titleLogo from '../../images/titleLogo.png'
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';

const Category=()=> {
  const { category } = useParams();
  const { dispatch } = useContext(MenuContext);
  const products = useSelector(SelectProduct);
  const location = useLocation();
  const {t} = useTranslation();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://dashboard-api-v8p2.onrender.com";
  const skeletonProducts = [];

  for (let i = 0; i < 6; i++) {
    skeletonProducts.push(
      <div key={i} className='productSkelton'>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </div>
    );
  }
  function Error(e){
		e.target.onerror = null
        e.target.src = mark
	} 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
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


return (
	<div className='categories'>
	   <Helmet>
       <title>{t(category)}</title>
		   <link rel="icon" href={titleLogo} />
       </Helmet>
      <Layout>
	     <div className='linkPages'>
	        <span className='link'>
            <Link to="/">{t("Accueil")}</Link>
          </span> 			
			    <span className='link'>></span>
			    <span className='link active'>{t(category)}</span>
			 </div>  
		 
        <div className='listProduct'>
        {!loading?
           prod
              .filter((filterData) => filterData.category === category)
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                  <div className='product' key={product._id}>
                    <Link to={`/product/${product._id}`} key={product._id} onClick={() => dispatch({ type: "open" })} >
                       <img src={product.images[0].url} onError={Error} alt={product.desc} className='img'/>
                       <h6 className='prodName'>{product.name}-{product.desc}</h6>
                       <h6 className='price'>{product.price} {t("DA")}</h6>
                    </Link>
                  </div>
                     
                     
                  )
              })
          :
          <div className="listSkelton">{skeletonProducts}</div>
         }  

         </div>
        
     
   </Layout> 
   </div>
            
    )
}
export default Category