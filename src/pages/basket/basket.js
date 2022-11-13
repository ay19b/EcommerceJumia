import React, {useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Layout from '../../component/layout/layout'
import { Typography , Container, Grid} from "@mui/material";
import Data from '../../Library/stock'
import './basket.scss'
import Sidebar from '../../component/sidebar/sidebar'
import {MenuContext} from '../../context/menuContext'
import {FaTrash} from "react-icons/fa";
import { useContext } from "react";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ariel from '../../images/supermarket/ariel.jpg'
import { useSelector,useDispatch } from "react-redux";
import {selectTotalAmount} from "../../features/variableSlice"
import {incrementProduct,decrementProduct} from "../../features/productSlice"
import {setTotalAmount} from "../../features/variableSlice"
import {SelectProduct} from '../../features/productSlice'
import AlertDialog from './dialoge'
import {TiShoppingCart} from "react-icons/ti";


const Cart=()=> {
  const { category } = useParams();
  const { menu } = useContext(MenuContext);
  const location = useLocation();
  let totalAmount = useSelector(selectTotalAmount);
  const product = useSelector(SelectProduct);
  const cartProducts = product.filter((product) => product.added);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  
  
  const handleClickOpen = () => {
    setOpen(true);
	
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  
  let sum = cartProducts
  .map((product) => {
    let price = product.price;
    let quantity = product.quantity;
    let total = price * quantity;
    return total;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  
  if(cartProducts.length==0){
    return(
     <div className='cart'> 
      <Layout>
      <div className={!menu ? 'Sidebar close' : 'Sidebar'} >
	         <Sidebar />	
	  </div>
      <div className='emptyBasket'>
        <TiShoppingCart className='iconEmpty'/>
        <h5 className='empty'>Votre panier est vide !</h5>
        <h6 className='emptyCatg'>Parcourez nos catégories et découvrez nos meilleures offres !</h6>
        <Link to="/">
		  <Button color='primary' variant="contained" className='emptyBtn'>START YOUR SHOPPING</Button>
		</Link>
      </div>
      </Layout>
     </div> 
    )
  }
    return (
	<div className='cart'> 
        <Layout>
		   <div className={!menu ? 'Sidebar close' : 'Sidebar'} >
	         <Sidebar />	
	       </div>
           <div className='contentCart'>     
			<div className="CartProd">
				<span className='title'>Panier ({cartProducts.length})</span>
				<Divider/>
				
		{cartProducts
            .map((prod)=>{
              
            return(
             <div className="Cart" key={prod.id}>
				  <div className="prod">
				  <div className='imgProd'>
				    <img src={prod.image} className='img'/>
				  </div>
				  <div className='infProd'>
				    <h6 className='nameProd'>{prod.product}</h6>
					<span className='seller'>Vendeur:</span>
					<span className='remaining'>Quelques articles restants</span>
					<p className='prg'>Éligible à la livraison gratuite (uniquement en point de retrait sur la Wilaya Alger.)</p>
				  </div>
				  <div className='price'>{prod.price}DA</div>
				</div>
				<div className='Btns'>
                   <div className='dlt'>
                   <Link to={`/cart/${prod.id}`} key={prod.id}>
                    <Button variant="text" color='primary' startIcon={<FaTrash/>} onClick={handleClickOpen}>
                     supprimer
                    </Button>
                   </Link>
                    <AlertDialog  open={open} handleClose={handleClose} />
                    </div>  
                   
                     <div className='quantity'>
                      <Button color='primary'  variant="contained" disabled={prod.quantity==1} onClick={() => dispatch(decrementProduct(prod))} >-</Button>
                        <h6 className='itemQuant'>{prod.quantity}</h6>
                      <Button color='primary'  variant="contained" disabled={prod.quantity==10} onClick={() => dispatch(incrementProduct(prod))}>+</Button>
                     </div>
                   
                  </div>
				  <Divider/>
				</div>
          ) 
         })
        }
				 
			   </div>
                         
			

			
           <div className='resume'>  
                <div className="title">RÉSUMÉ DU PANIER</div>
				<Divider />
				<div className="amount">
				  <span>Sous-total</span>
				  <span>{sum}</span>
				</div>
				<p>Frais de livraison non inclus à ce stade.</p>
				<Divider />
				<div className='freeDvl'>Livraison gratuite</div>
				<p className='prg'>Les articles Jumia Express sont éligibles à la livraison gratuite en point de retrait sur Alger</p>
				<Divider />
				<Button color='primary'variant="contained"className='btn'>Commander ({sum})DA</Button>
			</div> 			
						
			</div>		   
                     
					 
                      
               
          </Layout>  
		</div> 
            
    )
}
export default Cart