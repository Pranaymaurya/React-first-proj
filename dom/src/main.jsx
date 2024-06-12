import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './home.jsx'
import About from './about.jsx'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Navbar from './navbar.jsx'
import Profile from './profile.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Navbar/>}>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>}/>
    </Route>
    </>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
     {/* <Navbar/> */}
  </React.StrictMode>,
)
