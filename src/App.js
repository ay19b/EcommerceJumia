import './App.css';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Category from './pages/categ/categ';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams,useLocation } from 'react-router-dom';

function App() {
	const { category } = useParams();
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
		 </Route>
		 <Route path={'/product/:id'}>
            <Route index element={<Detail />} />
		 </Route>
		  <Route path={'/:category'}>
            <Route index element={<Category />} />
		 </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
