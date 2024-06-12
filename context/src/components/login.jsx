import React, { useContext, useState } from "react";
import Usercontext from "../infos/usercontext";

function Login(){
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const {setuser}=useContext(Usercontext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})
        
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text"
            placeholder="username"
            onChange={(e)=>setusername(e.target.value)}
            value={username}
            />
            <input type="password"
            placeholder="password"
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
            />
            <button onClick={handlesubmit}>SUBMIT</button>
        </div>
        
    )
}
export default Login;