import React, { useContext } from "react";
import { Link } from "react-router-dom";
import synth_home from "./images/synth_home.svg";
import guitar_home from "./images/guitar_home.svg";
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);

  console.log(products);
  return (
    <div className="lg:p-16">
      <div className="flex flex-col">
        {products.map((item) => {
          if (item.id === 3) {
            return (
              <div className="h-auto  bg-purple-200 rounded shadow-xs p-16 flex flex-col  lg:flex-row justify-around lg:mx-2">
                <div className="flex flex-col">
                  <p className="text-4xl">{item.name}</p>
                  <p className="my-3">From ${item.price}</p>
                  <Link to="/synth">
                    <div className=" h-10 py-1 border-black border hover:bg-black hover:text-white my-3 w-32">
                      <p className="text-center">Shop Now</p>
                    </div>
                  </Link>
                  <p className="mt-10">Strings M|I</p>
                </div>
                <img
                  className="lg:w-2/5"
                  src={`${item.img_url}`}
                  alt="syth"
                />
              </div>
            );
          }
        })}
        <div className="flex flex-col lg:flex-row mt-8 ">
          {products.map((item) => {
            if (item.category_id === 1 && (item.id === 1 || item.id === 4)) {
              return (
                <div className="h-xl lg:w-1/2 lg:mx-2 my-1 rounded  bg-gray-200 shadow-xs  p-8 hover:bg-gray-300 flex flex-col justify-center">
                  <img className="" src={`${item.img_url}`} alt="guitar" />
                  <p className="text-2xl font-bold">{item.name}</p>
                </div>
              );
            }
          })}
        </div>
        <div>
          <p className="text-3xl font-bold text-center mt-12">Trending Now</p>
          <p className="text-center text-gray-600 mb-12">
            Find the best deal in our collection
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          {products.map(item => {
            if(item.id > 2 && item.id < 7) {
              return(
                <div className="h-xl lg:w-1/2 lg:mx-2 my-1 rounded  bg-gray-200 shadow-xs  p-8 hover:bg-gray-300 flex flex-col justify-center">
            <img
              className=""
              src={`${item.img_url}`}
              alt="guitar"
            />
            <p className="text-xl font-bold">
              {item.name}
            </p>
          </div>
              )
            }
          })}
        </div>
      </div>
      <footer className="w-full h-40 -t-2 -gray-200 mt-24"></footer>
      <p className="text-center -mt-16">Made by Pedro Revilla</p>
    </div>
  );
}

export default Home;
