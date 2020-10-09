import React from "react";

function ProductPage(props) {
  const paramItemId = props.match.params.id;

  const item = props.items.find((item) => {
    return item.id === Number(paramItemId);
  });
  return (
    <div className="lg:p-16 flex flex-col h-screen">
      <div className="flex lg:flex-row flex-col">
        <div className="p-8  bg-gray-100 mt-12 ">
          <img className="mt-20" src={`${item.img_url}`} />
        </div>

        <div className=" lg:w-3/5 flex flex-col p-8">
          <h1 className="text-3xl font-light">{item.name}</h1>
          <p className="text-3xl font-light">Price: ${item.price}</p>
          <p className="text-justify my-10">{item.description}</p>
          <div className=" h-10 py-1 border-black border hover:bg-black hover:text-white my-3 w-full">
            <p className="text-center">add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
