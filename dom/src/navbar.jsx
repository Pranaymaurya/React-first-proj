import { Link, Outlet } from "react-router-dom";
import Profile from "./profile";
import About from "./about";
import App from "./App";

function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </nav>
    <>
          <App/>
          <Profile />
          <Outlet />
          <About /></>
  );
}

export default Navbar;
