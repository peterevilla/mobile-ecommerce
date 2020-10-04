import React from "react";
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.svg'
import cart from '../components/images/cart.svg'






function Navigation() {
  return (
    <nav className="flex lg:flex-row flex-col  justify-center" >
            <img className=" p-2
        " src={logo} alt="logo" />

       <div className="flex justify-center lg:justify-end">
         <Link to='/' className=" lg:p-8 p-2" >
             Home
         </Link>
         <Link to='/guitar' className=" lg:p-8 p-2">
             Guitar
         </Link>
         <Link to='/bass' className=" lg:p-8 p-2">
             Bass
         </Link>
         <Link to='/synth' className=" lg:p-8 p-2">
             Synth
         </Link>
         <Link to='/cart' className=" lg:p-8 p-2">
             <img src={cart} alt="cart"/>
         </Link>
     </div>
    </nav>
  );
}

export default Navigation;
