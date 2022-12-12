import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { MenuContextProvider } from './context/menuContext';
import  { persistor, store }  from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './i18n';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Suspense fallback="">
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

