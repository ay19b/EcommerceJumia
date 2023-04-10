import React from 'react'
import {Typography} from "@mui/material";
import skone from '../../images/skone.jpg'
import sktwo from '../../images/sktwo.jpg'
import skthree from '../../images/skthree.jpg'
import skfour from '../../images/skfour.jpg'
import './offer.scss'
import {useTranslation} from 'react-i18next'


export default function Offer() {
  const {t} = useTranslation();
  
  return (
    <div className="offer">        
      <div className='headProd'>
          <Typography variant='h6'>{t('Offres incontournables')}</Typography>
      </div>
       <div className='offerbanner'>               
          <img src={skone} alt='a' className='img'/>
          <img src={sktwo} alt='a' className='img'/>
          <img src={skthree} alt='a' className='img'/>
          <img src={skfour} alt='a' className='img'/>
      </div>     
    </div>
  )
}
