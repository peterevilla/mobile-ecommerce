import React from "react";
import { Link } from "react-router-dom";
import synth_home from "./images/synth_home.svg";
import guitar_home from "./images/guitar_home.svg";

function Home() {
  return (
    <div className="lg:p-16">
      <div className="flex flex-col">
        <div className="h-auto border bg-purple-200 rounded p-16 flex flex-col lg:flex-row justify-around">
          <div className="flex flex-col">
            <p className="text-5xl">Korg MS-20</p>
            <p className="my-3">From $400</p>
            <Link to="/synth">
              <div className=" border border-black h-10 py-1 hover:bg-black hover:text-white my-3">
                <p className="text-center ">Shop Now</p>
              </div>
            </Link>
          </div>
          <img className="justify-self-end" src={synth_home} alt="syth" />
        </div>
        <div className="flex  lg:flex-row mt-8 justify-between">
          <div className="h-xl w-2/4 rounded border bg-gray-200  p-8 hover:bg-gray-300 flex flex-col justify-center">
            <img className="" src={guitar_home} alt="guitar" />
            <p className="text-2xl font-bold">
              Better Music Gretsch G5230T Electromatic
            </p>
            <p>Guitar</p>
          </div>
          <div className="h-xl w-2/4 rounded border bg-gray-200  p-8 hover:bg-gray-300 flex flex-col justify-center">
            <img
              className=""
              src="https://www.bettermusic.com.au/media/catalog/product/cache/1/image/1224x/9df78eab33525d08d6e5fb8d27136e95/2/5/2507210502_gtr_frt_001_rr.png"
              alt="guitar"
            />
            <p className="text-2xl font-bold">
              Better Music Gretsch G5230T Electromatic
            </p>
            <p>Guitar</p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold text-center mt-12">Trending Now</p>
          <p className="text-center text-gray-600">
            Find the best deal in our collection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
