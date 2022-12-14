import {Container,Badge,Button,InputAdornment,TextField,Divider} from '@mui/material'
import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import {HiSearch,HiMenu,HiOutlineShoppingCart,HiOutlineChevronDown,HiOutlineChevronUp} from "react-icons/hi";
import {FiHeart,FiShoppingBag} from "react-icons/fi";
import {AiOutlineUser,AiTwotoneStar} from "react-icons/ai";
import {IoMdHelpCircleOutline} from "react-icons/io";
import {BsChatLeftDots} from "react-icons/bs"
import algeria from "../../images/algeria.png";
import france from "../../images/france.png";
import jumia from "../../images/Jumia.png";
import './nav.scss';
import Top from '../../images/TOP.gif'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import Sidebar from '../sidebar/sidebar'
import {SelectProduct} from '../../redux/productSlice';
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next'
import useMediaQuery from '@mui/material/useMediaQuery'


const Nav = () => {
	const [dropConnect, setDropConnect] = useState(false);
	const [dropHelp, setDropHelp] = useState(false);
    const { dispatch } = useContext(MenuContext);
    const { menu } = useContext(MenuContext);
    const [navbar, setNavbar] = useState(false);
	const [scroll, setScroll] = useState('');
	const product = useSelector(SelectProduct)
    const cartProducts = product?product.filter((product) => product.added):null;
	const { t, i18n } = useTranslation();
	const nav = useRef();
	const matches = useMediaQuery('(max-width:1000px)');
	

    const handleChangeLng = (lng) => {
		window.location.reload();
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

	const handleScroll = () => {
      if(window.pageYOffset <= 12){
         setNavbar(false)
      }else{
         setNavbar(true)
      }
    }
	const Scroll = () => {
      if(window.pageYOffset > 0){
         setScroll(-window.pageYOffset)
      }else if(window.pageYOffset < 33){
         setScroll(0)
      }
    }
	
	useEffect(() => {
      window.addEventListener('scroll',handleScroll)  
	  window.addEventListener('scroll',Scroll)  
	  return () => window.removeEventListener('scroll', handleScroll)
    })
   
	
    return (
      <section className='header'>
        <div className='LangHeader' style={{marginTop:scroll}}>
		    <Container> 
		      <div className='gridHeader'>
			    <div className="contGrid">
				   <div className="star">
				     <AiTwotoneStar className='iconStar'/>
				   </div>			   
				   <h6 className="text">{t('Vendez sur Jumia')}</h6>
				</div>
				<div className="contGrid">
				  <div className='langs'>
				    <div className={i18n.language === 'fr'?"lang active":"lang"} onClick={() => handleChangeLng("fr")}> 
                        <img src={france} alt="france" className="img"/>
                        <h6>francais</h6>
                     </div>
                     <div className={i18n.language === 'ar'?"lang active":"lang"} onClick={() => handleChangeLng("ar")}>
                        <img src={algeria} alt="algeria" className="img"/>
                        <h6>??????????????</h6>
                     </div>
				  </div>
				</div>
			  </div>
			 </Container>
		  </div>
		  <div  ref={nav} className={matches?'LastHeader':!navbar?'LastHeader':'LastHeader'}> 
		    <Container> 
			    <div  className={i18n.language === 'ar'?!menu ? 'Sidebar off' : 'Sidebar':!menu ? 'Sidebar close' : 'Sidebar'}>
	              <Sidebar />	
	            </div>
			  <div className='contLast'>
			    
			    <div className="logo">
				 <HiMenu className="menu" onClick={() => dispatch({ type: "TOGGLE" })}/>
				 <Link to="/" className="imglogo"><img src={jumia} className="img" alt='logo'/></Link>
				</div>
				
				<div className="fieldInput">
				  <TextField
                   id="outlined-hidden-label-small"
				   className='input'
                   size="small"
                   variant="outlined"
				   style={i18n.language === 'ar'?{marginLeft: "8px"}:{marginRight: "8px"}}
                   placeholder={t("Cherchez un produit, une marque ou une cat??gorie")}
                   InputProps={{
                   startAdornment: <InputAdornment position="start">
                                      <HiSearch />
                                   </InputAdornment> 
                   }} 

                  />
                  <Button variant="contained">
                    {t("RECHARCHER")}
                 </Button>
				</div>
				<div className="contItem">
				   <div className="item" onMouseDown={()=> setDropConnect(!dropConnect)} onMouseOver={()=> setDropHelp(false)} >
				     <AiOutlineUser className="iconItem user"/>
                      <h6>{t('Se connecter')}</h6>
                     {!dropConnect?<HiOutlineChevronDown className="arrow"/> :<HiOutlineChevronUp className="arrow"/>}
					 {dropConnect && 
					  <div className={!navbar?'dropdown-menu':'dropdown-menu Navactive'}  onMouseLeave={()=> setDropConnect(false)}>
	                   <Button variant="contained">{t('Se connecter')}</Button>
		               <Divider />
                       <div className="item">
                          <AiOutlineUser className="iconItem user"/>
                          <h6>{t('Mon compte')}</h6>
		               </div>
		               <div className="item">
                         <FiShoppingBag className="iconItem user"/>
                         <h6>{t('Mes commandes')}</h6>
		               </div>
		               <div className="item">
                         <FiHeart className="iconItem user"/>
                         <h6>{t('Ma liste d\'envies')}</h6>
		               </div>
                     </div>
					 }
				   </div>
				   <div className="item" onMouseDown={()=> setDropHelp(!dropHelp)} onMouseOver={()=> setDropConnect(false)} >
				     <IoMdHelpCircleOutline className="iconItem"/>
                     <h6>{t('Aide')}</h6>
                     {!dropHelp?<HiOutlineChevronDown className="arrow"/> :<HiOutlineChevronUp className="arrow"/>}
					 {dropHelp && 
					  <div className={!navbar?'dropdown-menu':'dropdown-menu Navactive'} onMouseLeave={()=> setDropHelp(false)}>
                        <div className="item">{t('Centre d\'Assistance')}</div>
		                <div className="item"><h6>{t('Passer et suivre ma commande')}</h6></div>
		                <div className="item"><h6>{t('Annuler ma commande')}</h6></div>
						<div className="item"><h6>{t('Retour &amp; Remboursement')}</h6></div>
		                <div className="item"><h6>{t('Modes de paiement')}</h6></div>
						<Divider />
						<Button variant="contained" startIcon={<BsChatLeftDots />}>{t('Chat en direct')}</Button>
                      </div>
					 }
				   </div>
				   <div className="item">
				   <Link to={'/cart'} className="item">
				     
					 <Badge badgeContent={cartProducts?cartProducts.length:null} color="primary" className='iconNav'>
                       <HiOutlineShoppingCart className="iconItem"/>
                     </Badge>
                     <h6>{t('Panier')}</h6>
                     </Link>
				   </div>
				</div>
				
			  </div>
		      <div className='search'>
			    <TextField
                   id="outlined-hidden-label-small"
				   className='input'
                   size="small"
                   variant="outlined"
                   placeholder={t("Cherchez un produit, une marque ou une cat??gorie")}
                   InputProps={{
                   startAdornment: <InputAdornment position="start">
                                      <HiSearch />
                                   </InputAdornment> 
                   }} 
                  />
			  </div>
			 </Container>
		  </div>
       
      </section>
    );
  }
    
  

export default Nav

