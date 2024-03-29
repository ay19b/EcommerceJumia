import { useEffect, useState } from 'react';
import './App.scss';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Category from './pages/categ/categ';
import Cart from './pages/basket/basket';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import Signin from './component/signin/signin';
import Login from './component/signin/login';
import Loading from './component/loading/loading';


function App() {
	const {t,i18n} = useTranslation();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const storedLanguage = localStorage.getItem('lng');
    if (!storedLanguage) {
      localStorage.setItem('lng', 'fr'); 
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
	
  return (
    <div className="App" style={{direction:t('ltr')}}>    
     <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
		      </Route>
          <Route path='/sign-in'>
            <Route index element={<Signin />} />
		      </Route>
          <Route path='/login'>
            <Route index element={<Login />} />
		      </Route>
		      <Route path={'/product/:id'}>
            <Route index element={<Detail />} />
		      </Route>
		      <Route path={'/:category'}>
            <Route index element={<Category />} />
		      </Route>
		      <Route path={'cart'}>
            <Route index element={<Cart />} />
		      </Route>
		      <Route path={'/cart/:Id'}>
            <Route index element={<Cart />} />
          </Route>
	      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
