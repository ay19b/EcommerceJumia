import React, { useState} from 'react';
import { Typography} from "@mui/material";
import Data from './data'
import './promo.scss'
import {useTranslation} from 'react-i18next'
import { Blurhash } from 'react-blurhash';


export default function Promo() {
	const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(Data);

	
  const handleImageLoad = () => {
    setLoading(true);
    };

  return (
    <div className="promo">
       <div className='headProd'>
           <Typography variant='h6'>{t('CODES PROMOS TVs')}</Typography>
       </div>
       <div className='bannerPub'>
          {data.map((item)=>{
            const {id,img,blurHash}=item;
            return(
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