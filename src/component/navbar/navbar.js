import {Typography, Container,Grid,Badge,Button,InputAdornment,TextField} from '@mui/material'
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GiAlliedStar} from "react-icons/gi";
import {HiSearch,HiMenu,HiOutlineShoppingCart,HiOutlineChevronDown} from "react-icons/hi";
import {AiOutlineUser,AiTwotoneStar} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {TiShoppingCart} from "react-icons/ti";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {IoMdHelpCircleOutline} from "react-icons/io";
import Avatar from 'react-avatar';
import algeria from "../../images/algeria.png";
import france from "../../images/france.png";
import jumia from "../../images/Jumia.png";
import './nav.scss';
import Top from '../../images/TOP.gif'

const Nav = () => {
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
				   <h6 className="text">Vendez sur Jumia</h6>
				</div>
				<div className="contGrid">
				  <div className='langs'>
				    <div className="lang active">
                        <img src={france} className="img"/>
                        <h6>francais</h6>
                     </div>
                     <div className="lang">
                        <img src={algeria} className="img"/>
                        <h6>العربية</h6>
                     </div>
				  </div>
				   
				</div>
			  </div>
			 </Container>
		  </div>
		  <div className='LastHeader'>
		    <Container> 
			  <div className='contLast'>
			    
			    <div className="logo">
				 <HiMenu />
				  <Link to={'/'}>
				   <img src={jumia} className="imglogo"/>
				  </Link> 
				</div>
				<div className="fieldInput">
				  <TextField
                   id="outlined-hidden-label-small"
				   className='input'
                   size="small"
                   variant="outlined"
                   placeholder="Cherchez un produit, une marque ou une catégorie"
                   InputProps={{
                   startAdornment: <InputAdornment position="start">
                                      <HiSearch />
                                   </InputAdornment> 
                   }} 

                  />
                  <Button variant="contained">RECHARCHER</Button>
				</div>
				<div className="contItem">
				   <div className="item">
				     <AiOutlineUser className="iconItem user"/>
                      Se connecter
                     <HiOutlineChevronDown />
				   </div>
				   <div className="item">
				     <IoMdHelpCircleOutline className="iconItem"/>
                      Aide
                     <HiOutlineChevronDown />
				   </div>
				   <div className="item">
				     <HiOutlineShoppingCart className="iconItem"/>
                      Panier
                     
				   </div>
				</div>
				
			  </div>
		      
			 </Container>
		  </div>
       
      </section>
    );
  }
    
  

export default Nav