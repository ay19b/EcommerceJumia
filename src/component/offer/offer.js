import React from 'react'
import { Typography , Container,Grid} from "@mui/material";
import skone from '../../images/skone.jpg'
import sktwo from '../../images/sktwo.jpg'
import skthree from '../../images/skthree.jpg'
import skfour from '../../images/skfour.jpg'
import './offer.scss'

export default function Offer() {
    
  return (
    <div className="offer">
        <Container>
              <div className='headProd'>
                  <Typography variant='h6'>Offres incontournables</Typography>
              </div>
              <div className='offerbanner'>
                <div>
                  <img src={skone} alt='a' className='img'/>
                </div>
                <div>
                  <img src={sktwo} alt='a' className='img'/>
                </div>
                <div>
                  <img src={skthree} alt='a' className='img'/>
                </div>
                <div>
                  <img src={skfour} alt='a' className='img'/>
                </div>

              </div>
        </Container>
    </div>
  )
}
