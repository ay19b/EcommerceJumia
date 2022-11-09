import Nav from '../navbar/navbar';
import Footer from '../footer/footer';


export default function Layout({children}) {

  return (
      <>
          <Nav />
	        {children}
	      <Footer />
      </>
  );
}