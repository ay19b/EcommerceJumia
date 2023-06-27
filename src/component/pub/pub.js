import React, { useState,useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import Skeleton from '@mui/material/Skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';

function Pub(){
    const [data, setData] = useState(pub);
    const [loading, setLoading] = useState(false);

    const handleImageLoad = () => {
      setLoading(true);
      };

    return(
     <div className='pub'>         
      <div className="ListPub">
        {
         data.map((item)=>{
          const {id,img,blurHash}=item;
          return(
            <>
            {!loading &&<Blurhash hash={blurHash} className='listImg' /> }
            <img
               src={img}
               alt=''
               className='listImg'
               key={id}
               onLoad={handleImageLoad}
               style={{ display: loading ? 'block' : 'none' }}
            />   
            </>
          )
        })
        }
        </div>
    </div>
    )
}
export default Pub;







