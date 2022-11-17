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
import {useTranslation} from 'react-i18next'

const Cart=()=> {
  const { category } = useParams();
  const { menu } = useContext(MenuContext);
  const location = useLocation();
  let totalAmount = useSelector(selectTotalAmount);
  const product = useSelector(SelectProduct);
  const cartProducts = product.filter((product) => product.added);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
   const { t, i18n } = useTranslation();
  
  const handleClickOpen = () => {
    setOpen(true);
	
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  
  
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
      <div className='emptyBasket'>
        <TiShoppingCart className='iconEmpty'/>
        <h5 className='empty'>{t("Votre panier est vide")} !</h5>
        <h6 className='emptyCatg'>{t("Parcourez nos catégories et découvrez nos meilleures offres")}!</h6>
        <Link to="/">
		  <Button color='primary' variant="contained" className='emptyBtn'>{t("COMMENCEZ VOS ACHATS")}</Button>
		</Link>
      </div>
      </Layout>
     </div> 
    )
  }
    return (
	<div className='cart'> 
        <Layout>
           <div className='contentCart'>     
			<div className="CartProd">
				<span className='title'>{t("Panier")} ({cartProducts.length})</span>
				<Divider/>
				
		{cartProducts
            .map((prod)=>{
              
            return(
             <div className="Cart" key={prod.id}>
				  <div className="prod">
				  <div className='imgProd'>
				    <Link to={`/product/${prod.id}`} key={product.id}>
				      <img src={prod.image} className='img'/>
					</Link>
				  </div>
				  <div className='infProd'>
				    <Link to={`/product/${prod.id}`} key={product.id}>
					  <h6 className='nameProd'>{prod.product}</h6>
					</Link> 
					<span className='seller'>{t("Vendeur")}:</span>
					<span className='remaining'>{t("Quelques articles restants")}</span>
					<p className='prg'>{t("Éligible à la livraison gratuite (uniquement en point de retrait sur la Wilaya Alger.)")}</p>
				  </div>
				  <div className='price'>{prod.price}{t("DA")}</div>
				</div>
				<div className='Btns'>
                   <div className='dlt'>
                   <Link to={`/cart/${prod.id}`} key={prod.id}>
                    <Button variant="text" color='primary' startIcon={<FaTrash/>} onClick={handleClickOpen}>
                     {t("supprimer")}
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
                <div className="title">{t("RÉSUMÉ DU PANIER")}</div>
				<Divider />
				<div className="amount">
				  <span>{t("Sous-total")}</span>
				  <span>{sum}</span>
				</div>
				<p>{t("Frais de livraison non inclus à ce stade.")}</p>
				<Divider />
				<div className='freeDvl'>{t("Livraison gratuite")}</div>
				<p className='prg'>{t("Les articles Jumia Express sont éligibles à la livraison gratuite en point de retrait sur Alger")}</p>
				<Divider />
				<Button color='primary'variant="contained"className='btn'>{t("Commander")} ({sum}){t("DA")}</Button>
			</div> 			
						
			</div>		   
                     
					 
                      
               
          </Layout>  
		</div> 
            
    )
}
export default Cart