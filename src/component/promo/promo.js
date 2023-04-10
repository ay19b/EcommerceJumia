import React from 'react'
import { Typography} from "@mui/material";
import one from '../../images/codePr1.jpg'
import two from '../../images/codePr2.jpg'
import three from '../../images/codePr3.jpg'
import './promo.scss'
import {useTranslation} from 'react-i18next'


export default function Promo() {
	const {t} = useTranslation();
	
	
  return (
    <div className="promo">
       <div className='headProd'>
           <Typography variant='h6'>{t('CODES PROMOS TVs')}</Typography>
       </div>
       <div className='bannerPub'>
         <img src={one} alt='a' className='img'/>
         <img src={two} alt='a' className='img'/>
         <img src={three} alt='a' className='img'/>     
       </div>       
    </div>
  )
}