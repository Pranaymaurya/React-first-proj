import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import MainContent from './mainp.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Service from './services.jsx'
import Cover from './cover.jsx'


const router=createBrowserRouter(createRoutesFromElements(
  
  <Route path="" element={<App/>}>
    {/* <Route path="/app" element={<App/>}/> */}
    <Route path="" element={<MainContent/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/service'element={<Service/>}/>
  </Route> 
   

))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
