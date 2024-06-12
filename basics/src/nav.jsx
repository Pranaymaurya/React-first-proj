import React from "react";

function Navv() {
  return (
    <>
    <div className=" h-10  block font-semibold   ">
    <nav className="justify-between flex items-center p-3">
      <a href="#">
        <img src="\basics\img"></img>
      </a>
      <div className=" flex gap-20">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </div>
      <a className="mr-10">
        LOGIN
      </a>
      </nav>
      </div>
    </>
  );
}
export default Navv;
