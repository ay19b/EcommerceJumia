import { useState} from 'react';
import Nav from '../navbar/navbar';
import Footer from '../footer/footer';
import {Container} from '@mui/material'
import ScrollToTop from '../scroll/scroll';  
import {useTranslation} from 'react-i18next'
import './layout.scss'


export default function Layout({children}) {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);


  if (loading) {
    return (
      <div class="spinner">
       <div></div>   
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
       <div></div>    
     </div>
    )
  }


  // change the language and save it in localstorage
  const handleChangeLng = (lng) => {
    setLoading(true); // Set loading state to true
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setLoading(false); // Set loading state to false
  };

  return (
      <>
         <Nav changeLang={handleChangeLng}/>
		     <Container>
	        {children}
	       </Container>	
		     <ScrollToTop />
	       <Footer changeLang={handleChangeLng}/>
      </>
  );
}