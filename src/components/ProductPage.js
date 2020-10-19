import React, {useContext} from "react";
import { ProductContext } from "../contexts/ProductContext";

function ProductPage(props) {
  const { addItem } = useContext(ProductContext);
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
          <p className="text-justify ">Make: {item.make}</p>
          <p className="text-justify ">Some Features: {item.features}</p>

         
          <a href="#" ><div className=" h-10 py-1 border-black border hover:bg-black hover:text-white my-3 w-full">
            <p className="text-center" onClick={() => addItem(item)}>add to cart</p>
          </div></a>
         
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
