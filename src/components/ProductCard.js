import React  from "react";

function ProductCard(props) {
  return (
    <div className="flex flex-col">
    <div className="h-xl lg:w-2/5 rounded  bg-gray-100  p-8 hover:bg-gray-300 ">
      <img
        className=""
        src="https://www.bettermusic.com.au/media/catalog/product/cache/1/image/1224x/9df78eab33525d08d6e5fb8d27136e95/2/5/2507210502_gtr_frt_001_rr.png"
        alt="guitar"
      />
       
    </div>
    <div>
    <p className="text-xl font-bold">
        Better Music Gretsch G5230T Electromatic
      </p>
      <p>$500</p>  
      </div>
    </div>
  );
}

export default ProductCard;
