import React from 'react'
import { Typography , Container,Grid} from "@mui/material";
import one from '../../images/fashionJumia.jpg'
import './fashmia.scss'
import {useTranslation} from 'react-i18next'

export default function Fashmia() {
   const { t, i18n } = useTranslation();
   
  return (
    <div className="fashmia">
        <div className='headProd'>
            <Typography variant='h6'>{t('La mode par Jumia')}</Typography>
        </div>
         <div className='fashionImg'>
            <img src={one} alt='a' className='img'/>
        </div>
        
    </div>
  )
}
