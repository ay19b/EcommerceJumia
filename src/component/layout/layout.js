import Nav from '../navbar/navbar';
import Footer from '../footer/footer';
import {Container} from '@mui/material'
import ScrollToTop from '../scroll/scroll';  
import {useTranslation} from 'react-i18next'

export default function Layout({children}) {
  const { t, i18n } = useTranslation();


  const handleChangeLng = (lng) => {
    localStorage.setItem('lng', lng);
    window.location.reload();
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