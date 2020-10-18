import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.svg'
import cartEmpty from '../components/images/cartEmpty.svg'
import cartFull from '../components/images/cartFull.svg'
import { CartContext } from "../contexts/CartContext";







function Navigation({Incart}) {

    const { cart } = useContext(CartContext);
  return (
    <nav className="flex lg:flex-row flex-col  lg:justify-around" >
            <img className=" p-2
        " src={logo} alt="logo" />

       <div className="flex justify-center lg:justify-end">
         <Link to='/' className=" lg:p-8 p-2 " >
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
         {cart.length === 0 ? (<Link to='/cart' className=" lg:p-8 p-2">
             <img src={cartEmpty} alt="cart"/>
             
         </Link>): (
             <Link to='/cart' className=" lg:p-8 p-2
             transition duration-500 ease-in-out transform -translate-y-1 scale-80
             ">
             <img src={cartFull} alt="cart"/>
             
         </Link>
         )}
         
     </div>
    </nav>
  );
}

export default Navigation;
