import React from 'react'
import { Typography , Container,Grid} from "@mui/material";
import one from '../../images/codePr1.jpg'
import two from '../../images/codePr2.jpg'
import three from '../../images/codePr3.jpg'
import './promo.scss'

export default function Promo() {
  return (
    <div className="promo">
        <Container>
              <div className='headProd'>
                  <Typography variant='h6'>CODES PROMOS TVs</Typography>
              </div>
              <div className='bannerPub'>
                <img src={one} alt='a' className='img'/>
                <img src={two} alt='a' className='img'/>
                <img src={three} alt='a' className='img'/>     
              </div>
        </Container>
    </div>
  )
}