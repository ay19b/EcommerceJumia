import React,{useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import { Typography , Container, Grid} from "@mui/material";
import Data from '../../Library/stock'
import './catg.scss'


const Category=()=> {
  const { category } = useParams();

  console.log(category)
    return (
      <Layout>
        <div className='categories'>
            <div className='linkPages'>
	                  <span className='link'>
                        <Link to="/">Home</Link>
                      </span> 			
			          <span className='link'>></span>
			          <span className='link active'>{category}</span>
			 </div>  	  
        <div className='listProduct'>
         
           {Data
              .filter((filterData) => filterData.category === category)
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                  <div className='product' key={product.id}>
                    <Link to={`/product/${product.id}`} key={product.id}>
                       <img src={product.image} className='img'/>
                       <h6 className='prodName'>{product.product}-{product.desc}</h6>
                       <h6 className='price'>{product.price} DA</h6>
                    </Link>
                  </div>
                     
                     
                  )
              })
          }
         </div>
        
      </div>
   </Layout>           
            
    )
}
export default Category