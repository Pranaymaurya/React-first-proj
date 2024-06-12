import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './header'
import Footer from './footer'
import MainContent from './mainp'
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
