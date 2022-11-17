import {Container,Badge,Button,InputAdornment,TextField} from '@mui/material'
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {HiSearch,HiMenu,HiOutlineShoppingCart,HiOutlineChevronDown} from "react-icons/hi";
import {AiOutlineUser,AiTwotoneStar} from "react-icons/ai";
import {IoMdHelpCircleOutline} from "react-icons/io";
import algeria from "../../images/algeria.png";
import france from "../../images/france.png";
import jumia from "../../images/Jumia.png";
import './nav.scss';
import Top from '../../images/TOP.gif'
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import Sidebar from '../sidebar/sidebar'
import {SelectProduct} from '../../features/productSlice';
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next'



const Nav = () => {
    const { dispatch } = useContext(MenuContext);
    const { menu } = useContext(MenuContext);
    const [navbar, setNavbar] = useState(false);
	const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);
	const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};
	const fixedNav=()=>{
      if(window.scrollY>=100){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
	
	useEffect(() => {
      fixedNav()
      window.addEventListener('scroll',fixedNav)  
    })
   
	
	
    return (
      <section className='header'>
       <div className='firstHeader'>
		    <Container> 
		      <div className='imgNav'>
			    <img src={Top} />
			  </div>
			 </Container>
		  </div>
		  <div className='secondHeader'>
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
				    <div className={i18n.language == 'fr'?"lang active":"lang"} onClick={() => handleChangeLng("fr")}> 
                        <img src={france} className="img"/>
                        <h6>francais</h6>
                     </div>
                     <div className={i18n.language == 'ar'?"lang active":"lang"} onClick={() => handleChangeLng("ar")}>
                        <img src={algeria} className="img"/>
                        <h6>العربية</h6>
                     </div>
				  </div>
				</div>
			  </div>
			 </Container>
		  </div>
		  <div className={!navbar?'LastHeader':'LastHeader active'}>
		    <Container> 
			  <div  className={i18n.language == 'ar'?!menu ? 'Sidebar off' : 'Sidebar':!menu ? 'Sidebar close' : 'Sidebar'}>
	              <Sidebar />	
	            </div>
			  <div className='contLast'>
			    
			    <div className="logo">
				 <HiMenu className="menu" onClick={() => dispatch({ type: "TOGGLE" })}/>
				 <Link to="/" className="imglogo"><img src={jumia} className="img"/></Link>
				</div>
				
				<div className="fieldInput">
				  <TextField
                   id="outlined-hidden-label-small"
				   className='input'
                   size="small"
                   variant="outlined"
                   placeholder={t("Cherchez un produit, une marque ou une catégorie")}
                   InputProps={{
                   startAdornment: <InputAdornment position="start">
                                      <HiSearch />
                                   </InputAdornment> 
                   }} 

                  />
                  <Button variant="contained">{t("RECHARCHER")}</Button>
				</div>
				<div className="contItem">
				   <div className="item">
				     <AiOutlineUser className="iconItem user"/>
                      <h6>{t('Se connecter')}</h6>
                     <HiOutlineChevronDown className="arrow"/>
				   </div>
				   <div className="item">
				     <IoMdHelpCircleOutline className="iconItem"/>
                     <h6>{t('Aide')}</h6>
                     <HiOutlineChevronDown className="arrow"/>
				   </div>
				   <div className="item">
				   <Link to={'/cart'} className="item">
				     
					 <Badge badgeContent={cartProducts.length} color="primary" className='iconNav'>
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
                   placeholder={t("Cherchez un produit, une marque ou une catégorie")}
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

