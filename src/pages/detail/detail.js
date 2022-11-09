import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {Grid,Container,Typography,Button,Snackbar} from '@mui/material';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Layout from '../../component/layout/layout'
import Data from '../../Library/stock'
import './detail.scss'
import black from "../../images/blackFri.png"

export default function Detail() {
  const { id } = useParams();
  const product =Data[id-1];


    return (
        <Layout>
               <div className='detail'> 
                 <Container>  
                    <div className='linkPages'>
	                  <span className='link'>
                        <Link to="/">Home</Link>
                      </span> 			
			          <span className='link'>></span>
                      <span  className='link'>
                         <Link to={`/${product.category}`}>{product.category}</Link>
                      </span> 			
			          <span className='link'>></span>
			          <span className='link active'>detailProd</span>
			        </div>   
					<div className="contentProd">
                       <div className='detailCont'>
                         <img src={product.image} className='img'/>
                         <div className='infDtl' >
                               <h6 className="prod">{product.desc}</h6>
                               <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
							   <img src={black} className="blackfrd"/>
							   <Divider />
                               <h6>{product.price} DA</h6>
							   <h6>+ livraison à partir de 180 DA (gratuite en point de retrait si supérieur à 1,500 DA) vers Kouba</h6>
                               <Button disabled={product.added} variant="contained"  startIcon={<HiOutlineShoppingCart/>} className='btnAdd'   autoFocus>
                                 I BUY 
                               </Button>
                         </div>   
                            
                       </div>
					   <div className="delivery"></div>
					   </div>
                       <Snackbar
                            anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
                            autoHideDuration={1500}
                            message="Product added to Cart" 
                        /> 
                 </Container>      
               </div>
          </Layout>     
    )
}