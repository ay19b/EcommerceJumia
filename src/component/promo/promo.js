import React, { useState,useEffect } from 'react';
import { Typography} from "@mui/material";
import one from '../../images/codePr1.jpg'
import two from '../../images/codePr2.jpg'
import three from '../../images/codePr3.jpg'
import './promo.scss'
import {useTranslation} from 'react-i18next'
import Skeleton from '@mui/material/Skeleton';

export default function Promo() {
	const {t} = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },1500)
  })
	
	
  return (
    <div className="promo">
       <div className='headProd'>
           <Typography variant='h6'>{t('CODES PROMOS TVs')}</Typography>
       </div>
       <div className='bannerPub'>
         {loading?<img src={one} alt='a' className='img'/>:(<Skeleton variant="rectangular" className='img' />)}
         {loading?<img src={two} alt='a' className='img'/>:(<Skeleton variant="rectangular" className='img' />)}
         {loading?<img src={three} alt='a' className='img'/>:(<Skeleton variant="rectangular" className='img' />)}   
       </div>       
    </div>
  )
}