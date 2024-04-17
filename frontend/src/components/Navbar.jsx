import React from "react";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen((prevState) => !prevState)
  }




  return (
    <nav className="fixed w-full h-24 bg-white shadow-xl">

      <div className="flex justify-end items-center h-full w-full px-10 2xl:px-16">

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-12">
          <AiOutlineMenu size={30}/>
        </div>

          <ul className="hidden sm:flex">
            <li><a href="/"         className="ml-10 hover:border-b text-xl font-bold">Home</a></li>
            <li><a href="/Notes"    className="ml-10 hover:border-b text-xl font-bold">Notes</a></li>
            <li><a href="/Login"    className="ml-10 hover:border-b text-xl font-bold">Login</a></li>
            <li><a href="/Register" className="ml-10 hover:border-b text-xl font-bold">Register</a></li>
            <li><a href="/asd"      className="ml-10 hover:border-b text-xl font-bold">Fail</a></li>
          </ul>
        </div>

        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-300 p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 w-[65%]  h-screen p-10 ease-in duration-500"
        }>

          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
              <AiOutlineClose size={30}/>
            </div>  
          </div>

          <div className="flex-col py-4">
          <ul>
            <li onClick={() => setMenuOpen(false)}><a href="/"          className="text-xl font-bold py-4 cursor-pointer inline-block">Home</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="/Notes"     className="text-xl font-bold py-4 cursor-pointer inline-block">Notes</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="/Login"     className="text-xl font-bold py-4 cursor-pointer inline-block">Login</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="/Register"  className="text-xl font-bold py-4 cursor-pointer inline-block">Register</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="/asd"       className="text-xl font-bold py-4 cursor-pointer inline-block">Fail</a></li>
          </ul>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
