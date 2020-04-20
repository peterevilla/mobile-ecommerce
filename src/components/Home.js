import React from 'react'
import { Link } from "react-router-dom";

const bgStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
  };

function Home() {
    return (
        <div className=" bg-contain bg-red-100 lg:bg-cover lg:h-screen p-48 bg-no-repeat  overflow-hidden " style={bgStyle}> 


            <Link to='/shop'><h2 className='bg-red-600 w-24 h-8 text-white text-center rounded p-fixed '>Shop Now</h2></Link>
            
        </div>
    )
}

export default Home;
