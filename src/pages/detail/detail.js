import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {AiTwotoneStar,AiOutlineTwitter} from "react-icons/ai";
import {BsShieldFillCheck} from "react-icons/bs";
import {SiHackthebox} from "react-icons/si";
import {GrFacebookOption} from "react-icons/gr";
import {TbTruckDelivery} from "react-icons/tb";
import {Button,Snackbar} from '@mui/material';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Layout from '../../component/layout/layout'
import './detail.scss'
import black from "../../images/blackFri.png"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Category from '../../component/products/products'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {SelectProduct} from '../../redux/productSlice'
import {add} from "../../redux/productSlice"
import {useTranslation} from 'react-i18next'
import {Helmet} from "react-helmet";
import mark from '../../images/mark.png'
import titleLogo from '../../images/titleLogo.png'
import DialogImg from './dialogeImg'
import Data from '../../Library/stock'


export default function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const [willaya, setWillaya] = useState('');
  const [city, setCity] = useState('');
  const [count, setCount] = useState(0);
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const product =prod[id-1];
  const productSlice= Data[id-1];
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
   function Error(e){
		e.target.onerror = null
        e.target.src = mark
	} 
  
  const willayaChange = (event) => {
    setWillaya(event.target.value);
  };
  const cityChange = (event) => {
    setCity(event.target.value);
  };
  
  const ClickOpen = () => {
    setOpen(true);
  };
  const ClickClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  
  const handleClick = () => {
    setState(true)
    dispatch(add(Data[id-1]))
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
	        <Helmet>
                <title>{product.desc}</title>
				<link rel="icon" href={titleLogo} />
            </Helmet>
        <Layout>
		    <div className='linkPages'>
	                  <span className='link'>
                        <Link to="/">{t("Accueil")}</Link>
                      </span> 			
			          <span className='link'>></span>
                      <span  className='link'>
                         <Link to={`/${product.category}`}>{t(product.category)}</Link>
                      </span> 			
			          <span className='link'>></span>
			          <span className='link active'>{product.desc}</span>
			        </div>   
					<div className="contentProd">
              <div className='detailCont'>
					    <div className="imgProd">
						  <img src={product.image} onError={Error} alt={product.desc} 
						    className='img' style={i18n.language === 'fr'?{marginRight: '12px'}:{marginLeft: '12px'}} onClick={ClickOpen}/>
						 
						 <div className="share">{t("Partagez ce produit")}</div>
						 <div className='iconSocial'>
						  <GrFacebookOption className="icon"/>
						  <AiOutlineTwitter className="icon"/>
						 </div>
						</div>
                         
						 
                         <div className='infDtl' >
                               <h6 className="prod">{product.desc}</h6>
							                <div className="stars">
                                 <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
							                 </div>
                               <img src={black} alt='blackFri' className="blackfrd"/>
							                 <Divider />
                               <h6 className="price">{product.price} {t("DA")}</h6>
							                 <h6 className='inf'>{t("Quelques variantes avec peu de stock")}</h6>
							                 <h6 className='inf'>{t("+ livraison à partir de 180 DA (gratuite en point de retrait si supérieur à 1,500 DA) vers Kouba")}</h6>
                               <Button disabled={product.added} variant="contained"  startIcon={<MdOutlineAddShoppingCart/>} className='btnAdd'  onClick={handleClick}>
                                 {t("J'achète")} 
                               </Button>
							   <Divider />
							   <div className="listOffer">{t("Offres")}</div>
							   
							   <div className='inf'>
							    <div className="icon">
				                 <AiTwotoneStar className='iconStar'/>
				                </div>
							    <h6>{t("Ce produit n'est pas éligible à un retour, consultez les conditions ici.")}</h6>
							   </div>
							   <div className='inf'>
							    <div className="iconShield">
				                 <BsShieldFillCheck className='shield'/>
				                </div>
							    <h6>{t("Payez en ligne avec votre carte CIB/EDAHABIA en toute sécurité.")}</h6>
							   </div>
							  
                         </div>   
                            
                       </div>
					   <div className="delivery">
					    <div className="title">{t("Livraison & Retours")}</div>
						<Divider />
						<div className="address">{t("Choisissez un lieu de livraison")}</div>
						<FormControl >
                          <Select
                            value={willaya}
                            onChange={willayaChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>{t("Alger")}</em>
                            </MenuItem>
                            <MenuItem value={10}>{t("Setif")}</MenuItem>
                            <MenuItem value={20}>{t("Oran")}</MenuItem>
                            <MenuItem value={30}>{t("Bejaia")}</MenuItem>
                          </Select>
                        </FormControl>
						<FormControl >
                          <Select
                            value={city}
                            onChange={cityChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>{t("Alger")}</em>
                            </MenuItem>
                            <MenuItem value={10}>{t("Setif")}</MenuItem>
                            <MenuItem value={20}>{t("Oran")}</MenuItem>
                            <MenuItem value={30}>{t("Bejaia")}</MenuItem>
                          </Select>
                        </FormControl>
						<div className="DetailDelivery">
						 <TbTruckDelivery className="icon"/>
						 <div className="centerDeatil">
						  <div>{t("Livraison à domicile")}</div>
						  <div className="dtl">{t("Livraison 390 DA Le 13 novembre si vous commandez d'ici 6hrs 59mins")}</div>
						 </div>
						 <div className="linkDtl">{t("Details")}</div>
						</div>
						<div className="DetailDelivery">
						 <HiOutlineBriefcase className="icon"/>
						 <div className="centerDeatil">
						  <div>{t("Point de retrait")} </div>
						  <div className="dtl">{t("Livraison gratuite (vous économisez 300 DA)Retrait le 13 novembre si vous commandez d'ici 6hrs 59mins")}</div>
						 </div>
						 <div className="linkDtl">{t("Details")}</div>
						</div>
						<div className="DetailDelivery">
						 <SiHackthebox className="icon"/>
						 <div className="centerDeatil">
						  <div>{t("Modalités de retour")}</div>
						  <div className="dtl">{t("Retour gratuit sous 15 jours sur les produits Boutique Officielle et 7 jours sur les autres produitsEn savoir plus")}</div>
						 </div>
						 <div className="linkDtl"></div>
						</div>
					   </div>
					   </div>
					   <DialogImg  open={open} handleClose={ClickClose} image={product.image}/>
					   <Category cag={product.category} title={'Autres produits de la boutique'}/>
                       <Snackbar
                            anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
                            autoHideDuration={1500}
                            open={state}
                            onClose={handleClose}
                            message={t("Produit ajouté au panier")}
                        /> 
                      
               
          </Layout>  
		</div> 
    )
}