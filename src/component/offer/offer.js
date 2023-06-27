import React, { useState} from 'react';
import {Typography} from "@mui/material";
import offer from './data'
import './offer.scss'
import {useTranslation} from 'react-i18next'
import { Blurhash } from 'react-blurhash';


export default function Offer() {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(offer);

	
  const handleImageLoad = () => {
    setLoading(true);
  };
  
  return (
    <div className="offer">        
      <div className='headProd'>
          <Typography variant='h6'>{t('Offres incontournables')}</Typography>
      </div>
       <div className='offerbanner'>   
       {data.map((item)=>{
        const {id,img,blurHash}=item;
        return (
            <>
              {!loading &&<Blurhash hash={blurHash} className='img'/>}
              <img
                src={img}
                alt=''
                key={id}
                className='img'
                onLoad={handleImageLoad}
                style={{ display: loading ? 'block' : 'none' }}
              />   
            </>
        )
       })}            
      </div>     
    </div>
  )
}