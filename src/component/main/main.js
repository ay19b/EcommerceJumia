import React, { useState,useEffect } from 'react';
import Sidebar from '../sidebar/sidebar'
import Carousel from '../banner/banner'
import black from '../../images/black.jpg'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import "./main.scss"
import {useTranslation} from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '@mui/material/Skeleton';
import { Blurhash } from 'react-blurhash';

const Main = () => {
	const {t} = useTranslation();
	const [img, setImg] = useState();
    const [loading, setLoading] = useState(false);
	const blurhash = 'LSJF#sI=H@bH0jxFJ-ay}txEwaoK';
	

	const handleImageLoad = () => {
		setLoading(true);
	  };

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
		     {!loading &&<Blurhash hash={blurhash} className='img' /> }
			  <img 
			     src={black} 
				 alt=''
				 className='img' 
				 onLoad={handleImageLoad}
				 style={{ display: loading ? 'block' : 'none' }}
				 />
			 </div>
		   </div>
		 </div>
      </section>
    );
  }
    
  

export default Main;