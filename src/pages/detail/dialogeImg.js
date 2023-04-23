import React, {useState,useEffect} from 'react'
import {Dialog,DialogContentText,DialogTitle,DialogActions,DialogContent} from '@mui/material'
import {MdClose} from "react-icons/md";
import { useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next'
import './detail.scss'
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function DialogImg({open,handleClose}) {
  const [product, setProd] = useState([]);
  const { id  } = useParams();
  const {t,i18n} = useTranslation();
  const api = "https://dashboard-api-v8p2.onrender.com";
  const [loading, setLoading] = useState(true);
  

  // get product from api with id
  useEffect(() => {
    axios.put(`${api}/products/${id}`)
    .then(res => {
      setProd(res.data)
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, [id]);


  return (
    
    <div className='dialog'> 
    <Dialog
       open={open}
       onClose={handleClose}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description" 
	     overlayStyle={{backgroundColor: 'transparent!important'}}
	     style={{backgroundColor: 'transparent!important'}}
     >
     <DialogTitle id="responsive-dialog-title" className={i18n.language === 'fr'?null:{direction: 'rtl'}}>
	  <div  className={i18n.language === 'fr'?"titleDial":"titleDial arb"}>
	     {t("Images du produit")}
         <MdClose onClick={handleClose}/>
	  </div>
     </DialogTitle>
     <DialogContent>
     <DialogContentText id="alert-dialog-description">
       <Carousel showThumbs={product?.images?.length>1? true:false}>
       {product.images?.map((img,index)=>{
                  return (
                     <img src={img.url} className='img' alt={img.alt}/>
                  )
        })}
       </Carousel>  
      </DialogContentText>
     </DialogContent>
     <DialogActions>
     </DialogActions>
    </Dialog>
    </div>
     );
   }
