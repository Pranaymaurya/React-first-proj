// src/App.js
import React from 'react';
import Navv from './nav';
import Footer from './foot';
import Content from './content';

import {createBrowserRouter} from 'react-dom' 
const App = () => {
  const router=createBrowserRouter(
    {
      path:"/",
      element:<nav/>

    }
  )
  return (
      createBrowserRouter
  );
};

export default App;

