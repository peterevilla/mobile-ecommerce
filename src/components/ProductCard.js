import React  from "react";

function ProductCard({item}) {
  return (
    <div className="flex flex-col">
    <div className="h-64 m-3  rounded  bg-gray-100  p-8 hover:bg-gray-300 ">
      <img
        className="mt-8"
        src={`${item.img_url}`}
        alt="guitar"
      />
       
    </div>
    <div className="mx-3">
    <p className="text-xl font-bold">
        {item.name}
      </p>
  <p>${item.price}</p>  
      </div>
    </div>
  );
}

export default ProductCard;
