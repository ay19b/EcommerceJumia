import React from 'react'
import { Typography , Container,Grid} from "@mui/material";
import one from '../../images/codePr1.jpg'
import two from '../../images/codePr2.jpg'
import three from '../../images/codePr3.jpg'


export default function Promo() {
  return (
    <div className="promo">
        <Container>
              <div className='headProd'>
                  <Typography variant='h6'>CODES PROMOS TVs</Typography>
              </div>
              <Grid container spacing={1} className='banner'>
                <Grid item md={4} xs={12}>
                  <img src={one} alt='a' className='img'/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <img src={two} alt='a' className='img'/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <img src={three} alt='a' className='img'/>
                </Grid>

              </Grid>
        </Container>
    </div>
  )
}