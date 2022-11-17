import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuContextProvider } from './context/menuContext';
import  store  from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './i18n';


let persistor = persistStore(store);



  




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Suspense fallback="loading">
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
	  </PersistGate> 
    </Provider>
  </React.StrictMode>
  </Suspense>,
);

