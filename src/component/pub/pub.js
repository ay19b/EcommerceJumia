import React, { useState,useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import Skeleton from '@mui/material/Skeleton';

function Pub(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      setData(pub);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [pub]);

    return(
     <div className='pub'>         
      <div className="ListPub">
        {
         data.map((item)=>{
          const {id,img}=item;
          return(
            loading?
            <Skeleton variant="rectangular" className='listImg' key={id}/>:
            <img src={img} className='listImg' key={id}/>
            
          )
        })
        }
        </div>
    </div>
    )
}
export default Pub;







