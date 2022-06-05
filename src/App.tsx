import React from 'react';

import './App.css';
import AppContext from './AppContext';
import AppStore from './stores/AppStore';
import TestStore from './stores/UserStore';
import UserStore from './stores/UserStore';
import { ThemeProvider } from 'styled-components'
import TestPage2 from './types/testPage2';




function App() {
  const store = new AppStore()

  // setBaseAsset can be used if all your assets live in the same directory



  return (
    
    <>
   
     <TestPage2/>
   
   </>
   
   
  );
}

export default App;
