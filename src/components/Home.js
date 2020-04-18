import React from 'react'
import { Link } from "react-router-dom";

const bgStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1523373691363-9bb4fa00f118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")',
  };

function Home() {
    return (
        <div className=" h-screen bg-fixed p-48" style={bgStyle}> 


            <Link to='/shop'><h2 className='bg-red-600 w-24 h-8 text-white text-center rounded p-fixed '>Shop Now</h2></Link>
            
        </div>
    )
}

export default Home;
