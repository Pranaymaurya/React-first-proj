
import React, { useContext, useState } from "react";
import Usercontext from "../infos/usercontext";
function Profile(){
    const {user}=useContext(Usercontext)

    if(!user) return<h1>NOT loged in</h1>
    return(
        
        <h1>
            profile: {user.username}
        </h1>
    )
}
export default Profile;