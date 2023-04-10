import React, { useState,useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import CircularProgress from '@mui/material/CircularProgress';

function Pub(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setData(pub);
          setLoading(false);
        }, 1000);
      }, [pub]);

    return(
	 <div className='pub'>         
	    <div className="ListPub">
        {!loading?
         data.map((item)=>{
          const {id,img}=item;
          return(
           <img src={img} className='listImg' />  
          )
        })
        :(<CircularProgress className='spinner'/>) }
        </div>
	 </div>
    )
}
export default Pub;







