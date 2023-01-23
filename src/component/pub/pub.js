import React, { useState,useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import {useTranslation} from 'react-i18next'
import {ClipLoader} from 'react-spinners';



function Pub(){
    const { t, i18n } = useTranslation();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setData(pub)
      setTimeout(()=>{
        setLoading(true)
      },1200)
    })


    return(
	 <div className='pub'>         
	      <div className="ListPub">
        {loading?
            <>
             {data.map((item)=>{
               const {id,img}=item;
               return(
                <img src={img} className='listImg' />  
               )
              })}
           </>:(<ClipLoader size={60} color={"#ff7f00"} />)  }	
        </div>
	 </div>
    )
}
export default Pub;







