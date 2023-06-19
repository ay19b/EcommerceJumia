import React from 'react'
import {Typography} from "@mui/material";
import skone from '../../images/skone.jpg'
import sktwo from '../../images/sktwo.jpg'
import skthree from '../../images/skthree.jpg'
import skfour from '../../images/skfour.jpg'
import './offer.scss'
import {useTranslation} from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Offer() {
  const {t} = useTranslation();
  
  return (
    <div className="offer">        
      <div className='headProd'>
          <Typography variant='h6'>{t('Offres incontournables')}</Typography>
      </div>
       <div className='offerbanner'>               
          <LazyLoadImage src={sktwo} alt='a' className='img'/>
          <LazyLoadImage src={skone} alt='a' className='img'/>
          <LazyLoadImage src={skthree} alt='a' className='img'/>
          <LazyLoadImage src={skfour} alt='a' className='img'/>
      </div>     
    </div>
  )
}