import React,{useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import { Typography , Container, Grid} from "@mui/material";
import Data from '../../Library/stock'

const Category=()=> {
  const { category } = useParams();

  console.log(category)
    return (
      <Layout>
        <div className='category'>
        <Container>
            <div className='linkPages'>
				      <Typography variant='body2' className='link'>
                  <Link to="/">Home</Link>
              </Typography> 		
			  
              <Typography variant='body2'className='link'>></Typography>
			        <Typography variant='body2'className='link'>{category}</Typography>
			      </div> 
        <Grid container spacing={3}>
         
           {Data
              .filter((filterData) => filterData.category === category)
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                  <Grid item md={3} sm={5} xs={12} className='product' key={product.id}>
                    <Link to={`/product/${product.id}`} key={product.id}>
                       <img src={product.image} className='img'/>
                       <h2>{product.product}</h2>
                       <span>{product.price} DA</span>
                    </Link>
                  </Grid>
                     
                     
                  )
              })
          }
         </Grid>
        </Container>
      </div>
   </Layout>           
            
    )
}
export default Category