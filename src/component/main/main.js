import React from 'react';
import Sidebar from '../sidebar/sidebar'
import Carousel from '../banner/banner'
import black from '../../images/black.jpg'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import "./main.scss"
import {useTranslation} from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Main = () => {
	const {t} = useTranslation();

    return (
      <section className='main'>
        <div className='contMain'>
		   <Sidebar />
		   <Carousel />
		   <div className="info">
		     <div className='card'>
			   <div className='itemCard'>
			     <img src={one} alt="one"/>
			     <h4>{t('Centre Dassistance')}</h4>
			   </div>
			   <div className='itemCard'>
			     <img src={two} alt="two"/>
			     <h4>{t('Retour Facile')}</h4>
			   </div>
			   <div className='itemCard'>
			     <img src={three} alt="three"/>
			     <h4>{t('Points retrait')}</h4>
			   </div>
			 </div>
			 
			 <div className='blackFrd'>
			  <LazyLoadImage src={black} alt="black"/>
			 </div>
		   </div>
		 </div>
      </section>
    );
  }
    
  

export default Main;