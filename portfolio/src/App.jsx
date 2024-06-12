import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './navbar';
import Navbar from './navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;


