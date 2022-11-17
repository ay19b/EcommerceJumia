import React,{useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import { Typography , Container, Grid} from "@mui/material";
import Data from '../../Library/stock'
import './catg.scss'
import Sidebar from '../../component/sidebar/sidebar'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {SelectProduct} from '../../features/productSlice'
import {useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next'

const Category=()=> {
  const { category } = useParams();
  const { menu } = useContext(MenuContext);
  const { dispatch } = useContext(MenuContext);
  const products = useSelector(SelectProduct);
  const location = useLocation();
  const { t, i18n } = useTranslation();
 
 useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  
    return (
	<div className='categories'>
      <Layout>
	     <div className='linkPages'>
	                  <span className='link'>
                        <Link to="/">{t("Home")}</Link>
                      </span> 			
			          <span className='link'>></span>
			          <span className='link active'>{t(category)}</span>
			 </div>  
		 
        <div className='listProduct'>
         
           {products
              .filter((filterData) => filterData.category === category)
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                  <div className='product' key={product.id}>
                    <Link to={`/product/${product.id}`} key={product.id} onClick={() => dispatch({ type: "open" })} >
                       <img src={product.image} className='img'/>
                       <h6 className='prodName'>{product.product}-{product.desc}</h6>
                       <h6 className='price'>{product.price} {t("DA")}</h6>
                    </Link>
                  </div>
                     
                     
                  )
              })
          }
         </div>
        
     
   </Layout> 
   </div>
            
    )
}
export default Category