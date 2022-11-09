import React from 'react'
import { Typography , Container,Grid} from "@mui/material";
import one from '../../images/fashionJumia.jpg'
import './fashmia.scss'


export default function Fashmia() {
   
  return (
    <div className="fashmia">
        <Container>
              <div className='headProd'>
                  <Typography variant='h6'>La mode par Jumia</Typography>
              </div>
              <div className='fashionImg'>
                 <img src={one} alt='a' className='img'/>
              </div>
        </Container>
    </div>
  )
}
