import React,{useState,useEffect} from 'react'
import {Link,useLocation } from 'react-router-dom';
import Layout from '../../component/layout/layout'
import './basket.scss'
import {FaTrash} from "react-icons/fa";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import {incrementProduct,decrementProduct} from "../../features/productSlice"
import {SelectProduct} from '../../features/productSlice'
import AlertDialog from './dialoge'
import {TiShoppingCart} from "react-icons/ti";
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import mark from '../../images/mark.png'
import titleLogo from '../../images/titleLogo.png'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SliderCategory from '../../component/sliderCategory/sliderCategory';

const Cart=()=> {
  const product = useSelector(SelectProduct);
  const seenProd = JSON.parse(localStorage.getItem("products")) || [];
  const cartProducts =product? product.filter((product) => product.added):null;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const {t,i18n} = useTranslation();
  const { currentUser } = useContext(AuthContext);
  function Error(e){
		e.target.onerror = null
    e.target.src = mark
	} 

  
  // open AlertDialog 
  const handleClickOpen = () => {
    setOpen(true);
  };

  // close AlertDialog 
  const handleClose = () => {
    setOpen(false);
  };
  
  // scroll page to top 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  // get sum of  products price
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

  console.log(seenProd.length);

  return (
	<div className='cart'> 
	    <Helmet>
          <title>{t("Panier")}</title>
			    <link rel="icon" href={titleLogo} />
      </Helmet>
    <Layout>
		{cartProducts && cartProducts.length>=1?
           <div className='contentCart' style={{marginBottom:seenProd?'20px':'78px'}}>     
			<div className="CartProd">
				<span className='title'>{t("Panier")} ({cartProducts?cartProducts.length:null})</span>
				<Divider/>
				
	     {cartProducts.map((prod)=>{ 
            return(
       <div className="Cart" key={prod._id}>
				  <div className="prod">
				  <div className='imgProd'>
				    <Link to={`/product/${prod._id}`} key={prod._id}>
				       <img src={prod.images[0].url} onError={Error} alt={prod._id} className='img'/>
					</Link>
				  </div>
				  <div className='infProd'>
				    <Link to={`/product/${prod._id}`} key={prod._id}>
					  <h6 className='nameProd'>{prod.name}</h6>
					</Link> 
					<span className='seller'>{t("Vendeur")}:</span>
					<span className='remaining'>{t("Quelques articles restants")}</span>
					<p className='prg'>{t("Éligible à la livraison gratuite (uniquement en point de retrait sur la Wilaya Alger.)")}</p>
				  </div>
				  <div className='price'>{prod.price}{t("DA")}</div>
				</div>
				<div className='Btns'>
          <div className='dlt'>
          <Link to={`/cart/${prod._id}`} key={prod._id}>
           <Button variant="text" color='primary' startIcon={<FaTrash/>} onClick={handleClickOpen} >
            {t("supprimer")}
           </Button>
          </Link>
           <AlertDialog  open={open} handleClose={handleClose}/>
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
        }
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
            {currentUser?
            <Button color='primary'variant="contained"className='btn'>{t("Commander")} ({sum}){t("DA")}</Button>
            :<Link to={"/login"}>
              <Button color='primary'variant="contained"className='btn'>{t("Commander")} ({sum}){t("DA")}</Button>
             </Link>
          }
			</div> 			
			</div>		               
		:
		 <div className='emptyBasket' style={{marginBottom:seenProd?'20px':'78px'}}>
       <TiShoppingCart className='iconEmpty'/>
       <h5 className='empty'>{t("Votre panier est vide")} !</h5>
       <h6 className='emptyCatg'>{t("Parcourez nos catégories et découvrez nos meilleures offres")}!</h6>
       <Link to="/">
		    <Button color='primary' variant="contained" className='emptyBtn'>{t("COMMENCEZ VOS ACHATS")}</Button>
		   </Link>
     </div>
		}  
    {seenProd.length>1 && <SliderCategory title={'Vus récemment'} products={seenProd}/>}
    </Layout>  
		</div> 
            
    )
}
export default Cart