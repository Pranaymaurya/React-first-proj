import React,{useState} from "react";
import Usercontext from "./usercontext";

const Userprovider=({children})=> {
  const [user, setUser] = React.useState(null)
  return(
      <Usercontext.Provider value={{user, setUser}}>
      {children}
      </Usercontext.Provider>
  )
}
export default Userprovider;