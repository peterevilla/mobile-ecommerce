import React from "react";
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'





function Navigation() {
  return (
    <nav  >
        <div>
            <h1 className='text-3xl text-center lg:text-left italic'>Strings</h1>
        </div>
       <div className="-mb-px flex justify-center lg:justify-end">
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
