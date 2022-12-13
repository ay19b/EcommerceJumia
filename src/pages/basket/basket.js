import React,{useState,useEffect} from 'react'
import {Link,useLocation } from 'react-router-dom';
import Layout from '../../component/layout/layout'
import './basket.scss'
import {FaTrash} from "react-icons/fa";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import {incrementProduct,decrementProduct} from "../../redux/productSlice"
import {SelectProduct} from '../../redux/productSlice'
import AlertDialog from './dialoge'
import {TiShoppingCart} from "react-icons/ti";
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import mark from '../../images/mark.png'
import titleLogo from '../../images/titleLogo.png'

const Cart=()=> {
  const product = useSelector(SelectProduct);
  const cartProducts =product? product.filter((product) => product.added):null;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const {t,i18n} = useTranslation();
  
  function Error(e){
		e.target.onerror = null
        e.target.src = mark
	} 
  
  const handleClickOpen = () => {
    setOpen(true);
	
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  
  let sum = cartProducts?cartProducts
  .map((product) => {
    let price = product.price;
    let quantity = product.quantity;
    let total = price * quantity;
    return total;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0):null;
if(cartProducts){
  if(cartProducts.length===0){
    return(
     <div className='cart'> 
	   <Helmet>
             <title>{t("Panier")}</title>
			 <link rel="icon" href={titleLogo} />
        </Helmet>
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
  }}
    return (
	<div className='cart'> 
	      <Helmet>
             <title>{t("Panier")}</title>
			 <link rel="icon" href={titleLogo} />
          </Helmet>
        <Layout>
           <div className='contentCart'>     
			<div className="CartProd">
				<span className='title'>{t("Panier")} ({cartProducts?cartProducts.length:null})</span>
				<Divider/>
				
		{cartProducts?cartProducts
            .map((prod)=>{
              
            return(
             <div className="Cart" key={prod.id}>
				  <div className="prod">
				  <div className='imgProd'>
				    <Link to={`/product/${prod.id}`} key={prod.id}>
				      <img src={prod.image} onError={Error} alt={prod.id} className='img'/>
					</Link>
				  </div>
				  <div className='infProd'>
				    <Link to={`/product/${prod.id}`} key={prod.id}>
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
                    <Button variant="text" color='primary' startIcon={<FaTrash/>} onClick={handleClickOpen} >
                     {t("supprimer")}
                    </Button>
                   </Link>
                    <AlertDialog  open={open} handleClose={handleClose} />
                    </div>  
                   
                     <div className='quantity'>
                      <Button color='primary'  variant="contained" disabled={prod.quantity===1} onClick={() => dispatch(decrementProduct(prod))} >-</Button>
                        <h6 className='itemQuant'>{prod.quantity}</h6>
                      <Button color='primary'  variant="contained" disabled={prod.quantity===10} onClick={() => dispatch(incrementProduct(prod))}>+</Button>
                     </div>
                   
                  </div>
				  <Divider/>
				</div>
          ) 
         })
        :null}
				 
			   </div>
                         
			

			
           <div className='resume'>  
                <div className="title">{t("RÉSUMÉ DU PANIER")}</div>
				<Divider />
				<div className="amount">
				  <span>{t("Sous-total")}</span>
				  <span>{sum}{t("DA")}</span>
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