import React from 'react';
import { Link } from 'react-router-dom';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
import Words from './Words';
import logo from './images/logo.png';

const Navbar = () => {


    function hidee(){
      document.getElementById('imgc').style.display="none";
    }
    return (
      <>
        <nav className="navbar">
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a style={{paddingLeft:"20px"}} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="Logo" class="w-20 h-20 p-1 rounded-full" />
      <span style={{fontSize:"25px"}} class="ml-3 text-xl"> <a href="/"> Kidzee</a></span>
    </a>
    <nav id="main-nav" class=" links class-hide md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <a class="mr-5 hover:text-gray-900 navs btnnv"> <button onClick={hidee} > <Link to="/learn"> Learning Material </Link> </button></a>
    <a class="mr-5 hover:text-gray-900 navs btnnv"> <button onClick={hidee}> <Link to="/nurrym"> Nursery Rhymes </Link> </button></a>
      <a class="mr-5 hover:text-gray-900 navs btnnv"> <button onClick={hidee}> <Link to="/words"> Game </Link>  </button></a>
      {/* <a class="mr-5 hover:text-gray-900 navs btnnv"> <button > <Link to="/animal"> Animal </Link> </button></a> */}
      <a class="mr-5 hover:text-gray-900 navs btnnv"> <button onClick={hidee}> <Link to="/senses"> Quizes</Link>  </button> </a>
    </nav>
    
    <span id="uname" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Hello Dear  !
    </span>
  </div>
</header>
        </nav>
        </>
    );
}
 
export default Navbar;