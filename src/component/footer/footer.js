import React from 'react'
import jumiaFooter from "../../images/jumiaFooter.png";
import mark from "../../images/mark.png";
import google from "../../images/google.svg";
import app from "../../images/app.svg";
import {HiEnvelope} from "react-icons/hi2";
import {Container,TextField,InputAdornment,Button} from '@mui/material';
import './footer.scss'
import algeria from "../../images/algeria.png";
import france from "../../images/france.png";
import {useTranslation} from 'react-i18next'


const Footer=()=> {
    const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};
	
  return (
    <div className='footer'>
     <Container>
      <div className='ContFooter'>
       
        <img src={jumiaFooter} alt='jumiaFooter' className='imgLogo'/>
        
        <div  className='secondGrid'>
		        <div className='InscText'>
                  <h5>{t('Nouveau sur Jumia ?')}</h5>
                  <h6>{t('Inscrivez-vous à nos communications pour recevoir nos meilleures offres!')}</h6>
				</div>
                <div className="inputFooter">
                    <TextField
					  className="input"
                      id="outlined-basic"
                      placeholder={t("Entrez votre adresse e-mail")}
                      InputProps={{
                      startAdornment: <InputAdornment position="start">
                                        <HiEnvelope/>
                                      </InputAdornment>,         
                      }}
                    />
                      <Button variant="outlined" className='btn' style={{margin: '0px 10px'}}>{t('HOMME')}</Button>
                      <Button variant="outlined" className='btn'>{t('FEMME')}</Button>
                  
                </div>
        </div>
        <div className='lastGrid'>
		  <div className='poche'>
		    <img src={mark} className='mark' alt="star"/>
            <div className="pocheText">
               <h6 className='text'>{t('JUMIA DANS VOTRE POCHE!')}</h6>
			   <h6>{t('Téléchargez notre application gratuite')}</h6>
             </div>
          </div>
		  <img src={google} alt="googleApp" className='imgSvg' style={{marginRight: '6px'}}/>
		  <img src={app} alt="app" className='imgSvg'/>
        </div>
		
		
				 <div className='langs'>
				    <div className={i18n.language === 'fr'?"lang active":"lang"} onClick={() => handleChangeLng("fr")}> 
                        <img src={france} className="img" alt="france"/>
                        <h6>francais</h6>
                     </div>
                     <div className={i18n.language === 'ar'?"lang active":"lang"} onClick={() => handleChangeLng("ar")}>
                        <img src={algeria} className="img" alt="algeria"/>
                        <h6>العربية</h6>
                     </div>
				  </div>
				   
				
				
				
      </div>
    </Container>
  </div>  
  )
}

export default Footer

