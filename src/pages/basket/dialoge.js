import React, {useState,useEffect} from 'react'
import {Dialog,DialogContentText,DialogTitle,DialogActions,DialogContent,Button,Snackbar} from '@mui/material'
import {MdClose} from "react-icons/md";
import {FaTrash} from "react-icons/fa";
import { useParams} from 'react-router-dom';
import {SelectProduct} from '../../features/productSlice'
import { useSelector,useDispatch } from "react-redux";
import {remove} from "../../features/productSlice"
import './basket.scss'
import {useTranslation} from 'react-i18next'

export default function AlertDialog({open,handleClose}) {
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const { Id  } = useParams();
  const product =prod[Id-1];
  const [state, setState] = useState(false);
  const { t, i18n } = useTranslation();
  
  const Remove= () => {
    dispatch(remove(product))
    handleClose()
	setState(true)
  }
  const handleOff = () => {
    setState(false);
  };

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
     <DialogTitle id="responsive-dialog-title">
        {t("Retirer du panier")}
     <MdClose onClick={handleClose}/>
     </DialogTitle>
     <DialogContent>
     <DialogContentText id="alert-dialog-description">
       {t("Voulez-vous vraiment supprimer cet article du panier ?")}
      </DialogContentText>
     </DialogContent>
     <DialogActions>
      <Button variant="outlined"  startIcon={<FaTrash />} className='btnRemove' onClick={Remove}  autoFocus>
        {t('Supprimer le produit')}
      </Button>
     
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