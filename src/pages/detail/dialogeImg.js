import React, {useState,useEffect} from 'react'
import {Dialog,DialogContentText,DialogTitle,DialogActions,DialogContent,Button,Snackbar} from '@mui/material'
import {MdClose} from "react-icons/md";
import {FaTrash} from "react-icons/fa";
import { useParams} from 'react-router-dom';
import {SelectProduct} from '../../redux/productSlice'
import { useSelector,useDispatch } from "react-redux";
import {remove} from "../../redux/productSlice"
import {useTranslation} from 'react-i18next'
import './detail.scss'
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function DialogImg({open,handleClose}) {
  const prod = useSelector(SelectProduct);
  const [product, setProd] = useState([]);
  const dispatch = useDispatch();
  const { id  } = useParams();
  const [state, setState] = useState(false);
  const {t,i18n} = useTranslation();
  const api = "https://dashboard-api-v8p2.onrender.com";
  const [loading, setLoading] = useState(true);
  const firstImageUrl = product?.images?.[0]?.url;
  


  const Remove= () => {
    dispatch(remove(product))
    handleClose()
	  setState(true)
  }
  const handleOff = () => {
    setState(false);
  };

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
         {/* <img src={firstImageUrl}  className='img'/> */}
       </Carousel>  
      </DialogContentText>
     </DialogContent>
     <DialogActions>
     
     
     </DialogActions>
    </Dialog>
	
	<Snackbar
        anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
        autoHideDuration={10500}
        open={state}
        onClose={handleOff}
        message={t("Le produit a été retiré du panier")} 
    /> 
    </div>
     );
   }