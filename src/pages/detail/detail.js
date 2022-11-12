import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {AiOutlineUser,AiTwotoneStar,AiOutlineTwitter} from "react-icons/ai";
import {BsShieldFillCheck,BsTruck} from "react-icons/bs";
import {SiHackthebox} from "react-icons/si";
import {GrFacebookOption} from "react-icons/gr";
import {TbTruckDelivery} from "react-icons/tb";
import {Grid,Container,Typography,Button,Snackbar} from '@mui/material';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Layout from '../../component/layout/layout'
import Data from '../../Library/stock'
import './detail.scss'
import black from "../../images/blackFri.png"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Category from '../../component/products/products'
import Sidebar from '../../component/sidebar/sidebar'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import {add} from "../../features/productSlice"
import {incrementProduct,decrementProduct} from "../../features/productSlice"

export default function Detail() {
  const { id } = useParams();
  const { menu } = useContext(MenuContext);
  const location = useLocation();
  const [age, setAge] = useState('');
  const [count, setCount] = useState(0);
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const product =prod[id-1];
  const [state, setState] = useState(false);


  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  const handleClick = () => {
    setState(true)
    dispatch(add(product))
  };

  const handleClose = () => {
    setState(false);
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  
  
    return (
	  <div className='detail'> 
        <Layout>
		   <div className={!menu ? 'Sidebar close' : 'Sidebar'} >
	         <Sidebar />	
	       </div>
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
					    <div className="imgProd">
						  <img src={product.image} className='img'/>
						 <div className='listImg'>
						   <img src={product.image} />
						   <img src={product.image} />
						 </div>
						 <div className="share">Partagez ce produit</div>
						 <div className='iconSocial'>
						  <GrFacebookOption className="icon"/>
						  <AiOutlineTwitter className="icon"/>
						 </div>
						</div>
                         
						 
                         <div className='infDtl' >
                               <h6 className="prod">{product.desc}</h6>
                               <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
							   <img src={black} className="blackfrd"/>
							   <Divider />
                               <h6 className="price">{product.price} DA</h6>
							   <h6 className='inf'>Quelques variantes avec peu de stock</h6>
							   <h6 className='inf'>+ livraison à partir de 180 DA (gratuite en point de retrait si supérieur à 1,500 DA) vers Kouba</h6>
                               <Button disabled={product.added} variant="contained"  startIcon={<MdOutlineAddShoppingCart/>} className='btnAdd'  onClick={handleClick}>
                                 J'achète 
                               </Button>
							   <Divider />
							   <div className="listOffer" onClick={() => dispatch(incrementProduct(prod))}>Offres</div>
							   
							   <div className='inf'>
							    <div className="icon">
				                 <AiTwotoneStar className='iconStar'/>
				                </div>
							    <h6>Ce produit n'est pas éligible à un retour, consultez les conditions ici.</h6>
							   </div>
							   <div className='inf'>
							    <div className="iconShield">
				                 <BsShieldFillCheck className='shield'/>
				                </div>
							    <h6>Payez en ligne avec votre carte CIB/EDAHABIA en toute sécurité.</h6>
							   </div>
							  
                         </div>   
                            
                       </div>
					   <div className="delivery">
					    <div className="title">Livraison & Retours</div>
						<Divider />
						<div className="address">Choisissez un lieu de livraison</div>
						<FormControl >
                          <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>Alger</em>
                            </MenuItem>
                            <MenuItem value={10}>Setif</MenuItem>
                            <MenuItem value={20}>Oran</MenuItem>
                            <MenuItem value={30}>Bejaia</MenuItem>
                          </Select>
                        </FormControl>
						<FormControl >
                          <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>Alger</em>
                            </MenuItem>
                            <MenuItem value={10}>Setif</MenuItem>
                            <MenuItem value={20}>Oran</MenuItem>
                            <MenuItem value={30}>Bejaia</MenuItem>
                          </Select>
                        </FormControl>
						<div className="DetailDelivery">
						 <TbTruckDelivery className="icon"/>
						 <div className="centerDeatil">
						  <div>Livraison à domicile</div>
						  <div className="dtl">Livraison 390 DA Le 13 novembre si vous commandez d'ici 6hrs 59mins</div>
						 </div>
						 <div className="linkDtl">Details</div>
						</div>
						<div className="DetailDelivery">
						 <HiOutlineBriefcase className="icon"/>
						 <div className="centerDeatil">
						  <div>Point de retrait </div>
						  <div className="dtl">Livraison gratuite (vous économisez 300 DA)Retrait le 13 novembre si vous commandez d'ici 6hrs 59mins</div>
						 </div>
						 <div className="linkDtl">Details</div>
						</div>
						<div className="DetailDelivery">
						 <SiHackthebox className="icon"/>
						 <div className="centerDeatil">
						  <div>Modalités de retour</div>
						  <div className="dtl">Retour gratuit sous 15 jours sur les produits Boutique Officielle et 7 jours sur les autres produitsEn savoir plus</div>
						 </div>
						 <div className="linkDtl"></div>
						</div>
					   </div>
					   </div>
					   <Category cag={product.category} title={'Autres produits de la boutique'}/>
                       <Snackbar
                            anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
                            autoHideDuration={1500}
                            open={state}
                            onClose={handleClose}
                            message="Product added to Cart" 
                        /> 
                      
               
          </Layout>  
		</div> 
    )
}