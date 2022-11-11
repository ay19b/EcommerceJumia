import React,{useState,useEffect} from 'react';
import Sidebar from '../sidebar/sidebar'
import Carousel from '../banner/banner'
import {Container} from '@mui/material'
import black from '../../images/black.jpg'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import {RiQuestionMark} from "react-icons/ri";
import "./main.scss"

const Main = () => {
    return (
      <section className='main'>
        <div className='contMain'>
		   <Sidebar />
		   <Carousel />
		   <div className="info">
		     <div className='card'>
			   <div className='itemCard'>
			     <img src={one} />
			     <h4>Centre Dassistance</h4>
			   </div>
			   <div className='itemCard'>
			     <img src={two} />
			     <h4>Retour Facile</h4>
			   </div>
			   <div className='itemCard'>
			     <img src={three} />
			     <h4>Points retrait</h4>
			   </div>
			 </div>
			 
			 <div className='blackFrd'>
			  <img src={black} />
			 </div>
		   </div>
		 </div>
      </section>
    );
  }
    
  

export default Main;