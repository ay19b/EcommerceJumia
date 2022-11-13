import Nav from '../navbar/navbar';
import Footer from '../footer/footer';
import {Container} from '@mui/material'
import ScrollToTop from '../scroll/scroll';  
export default function Layout({children}) {

  return (
      <>
         <Nav />
		     <Container>
	        {children}
	       </Container>	
		     <ScrollToTop />
	       <Footer />
		 
      </>
  );
}