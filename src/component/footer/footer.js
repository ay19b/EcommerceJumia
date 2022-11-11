import React from 'react'
import jumiaFooter from "../../images/jumiaFooter.png";
import mark from "../../images/mark.png";
import google from "../../images/google.svg";
import app from "../../images/app.svg";
import {HiEnvelope} from "react-icons/hi2";
import { Grid ,Container, Typography,TextField,InputAdornment,Button} from '@mui/material';
import './footer.scss'


const Footer=()=> {

  return (
    <div className='footer'>
     <Container>
      <Grid container alignItems="center">
        <Grid item md={3} xs={3}>
          <img src={jumiaFooter} className='imgLogo'/>
        </Grid>
        <Grid item md={6} xs={6}  className='secondGrid'>
		        <div className='InscText'>
                  <h5>Nouveau sur Jumia ?</h5>
                  <h6>Inscrivez-vous à nos communications pour recevoir nos meilleures offres!</h6>
				</div>
                <div className="inputFooter">
                    <TextField
					  className="input"
                      id="outlined-basic"
                      placeholder="Entrez votre adresse e-mail"
                      InputProps={{
                      startAdornment: <InputAdornment position="start">
                                        <HiEnvelope/>
                                      </InputAdornment>,         
                      }}
                    />
                      <Button variant="outlined" className='btn' style={{marginRight: '10px'}}>HOMME</Button>
                      <Button variant="outlined" className='btn'>FEMME</Button>
                  
                </div>
        </Grid>
        <Grid item md={3} xs={3} className='lastGrid'>
		  <div className='poche'>
		    <img src={mark} className='mark'/>
            <div className="pocheText">
               <h6 className='text'>JUMIA DANS VOTRE POCHE!</h6>
			   <h6>Téléchargez notre application gratuite</h6>
             </div>
          </div>
		  <img src={google} className='imgSvg' style={{marginRight: '6px'}}/>
		  <img src={app} className='imgSvg'/>
        </Grid>
      </Grid>
    </Container>
  </div>  
  )
}

export default Footer
