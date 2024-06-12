import React from "react";

function Footer(){
    return(
        <div className="w-full  h-40 bottom-0 bg-orange-300 justify-evenly flex rounded-md">
         <div className="block">
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
         </div>
         <div className="block">
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
            <br></br>
            <a > link</a>
         </div>
        <form className="mt-5 justify-evenly">
            <input></input>
            <button className="ml-3">Enter</button>
            <br></br>
            <button className="mt-3">SUBSCRIBE</button>
        </form>
        </div>
    )
}

export default Footer