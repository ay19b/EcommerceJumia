import React from 'react'
import { Typography} from "@mui/material";
import one from '../../images/fashionJumia.jpg'
import './fashion.scss'
import {useTranslation} from 'react-i18next'

export default function Fashion() {
   const {t} = useTranslation();
   
  return (
    <div className="fashion">
        <div className='headProd'>
            <Typography variant='h6'>{t('La mode par Jumia')}</Typography>
        </div>
         <div className='fashionImg'>
            <img src={one} alt='a' className='img'/>
        </div>
        
    </div>
  )
}
