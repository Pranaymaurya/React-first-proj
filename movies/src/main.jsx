import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Page from './pagenotfound.jsx';
import Moviedetails from './moviedetail.jsx';
import About from './about.jsx';

const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<App/>}>
     <Route path="/" element={<Moviedetails/>}/>
     <Route path="/movieinfo" element={<App/>}/>
     <Route path="/movie" element={<App/>}/>
     <Route path="*" element={<Page/>}/>
     <Route path='/about' element={<About/>}/>
     
  </Route>  
  </>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
     
  </React.StrictMode>,
)
