import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import './catg.scss'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import titleLogo from '../../images/titleLogo.png'
import Skeleton from '@mui/material/Skeleton';
import { Data } from "../../Library/data";


const Category=()=> {
  const [catg, setCategory] = useState([]);
  const { category } = useParams();
  const { dispatch } = useContext(MenuContext);
  const location = useLocation();
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const skeletonProducts = [];

// skelton loading before get a products from api 
  for (let i = 0; i < 10; i++) {
    skeletonProducts.push(
      <div key={i} className='productSkelton'>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </div>
    );
  }

  // scroll page to top 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
   // get products from api 
  useEffect(()=>{
    setLoading(true)
    const filter = Data.filter((filterData) => filterData.category === category)
    setCategory(filter)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[category])

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
       {!loading?
        <div className='listProduct'>
        
           {catg
              .slice(0, 10)
              .map((product)=>{               
                  return( 
                  <div className='product' key={product._id}>
                    <Link to={`/product/${product._id}`} key={product._id} onClick={() => dispatch({ type: "open" })} >
                       <img src={product.images[0].url}  className='img'/>
                       <h6 className='prodName'>{product.name}-{product.desc}</h6>
                       <h6 className='price'>{product.price} {t("DA")}</h6>
                    </Link>
                  </div>
                  )
              })}
              
         </div> 
         : <div className="listSkelton">{skeletonProducts}</div> } 
   </Layout> 
   </div>
            
    )
}
export default Category
