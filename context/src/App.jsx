import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import Userprovider from './infos/usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Userprovider>
      <h1>Welcome all</h1>
      <Login/>
      <Profile/>
    </Userprovider>
  )
}

export default App
