import React from "react";
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'





function Navigation() {
  return (
    <nav className='border border-gray-400'>
        <div>
            <h1 className='text-3xl text-center'>My SHOP</h1>
        </div>
       <div className="-mb-px flex justify-center">
         <Link to='/' className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Home
         </Link>
         <Link to='/shop' className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
             Shop
         </Link>
         <Link to='/cart' className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3">
             Cart
         </Link>
     </div>
    </nav>
  );
}

export default Navigation;
