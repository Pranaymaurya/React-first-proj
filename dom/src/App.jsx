
import './App.css';
import About from './about';
import Home from './home';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider, NavLink} from 'react-router-dom';

function App() {
  
  return (
    <>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/profile'>Profile</NavLink>
     <NavLink to=''>Home</NavLink>
    </>
  );
}

export default App;

