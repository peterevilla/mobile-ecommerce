import React, {useContext} from 'react'
import { CartContext } from "../contexts/CartContext";


function CartList() {
    const { cart, removeItem } = useContext(CartContext);

    const getCartTotal = () => {
        return cart
          .reduce((acc, value) => {
            return acc + value.price;
          }, 0)
          .toFixed(2);
      };

      if (cart.length === 0) {
          return (
            <div className="lg:p-16 flex flex-col h-screen">
                 <h1 className="text-5xl font-light ml-16">Your Cart</h1>
            <div className="flex flex-col p-20">
                <p>Your cart is empty</p>
                </div>
                </div>
          )
      }
    return (
        <div className="lg:p-16 flex flex-col h-screen">
            <h1 className="text-5xl font-light ml-16">Your Cart</h1>
            <div className="flex flex-col p-20 ">
            {cart.map(item => (
                <div className="flex flex-col lg:flex-row justify-around  border-gray-200 border-b-2">
                        <img className=" w-40 h-auto mx-6" src={`${item.img_url}`} alt="item"/>
                        <p className="self-center mx-6">{item.name}</p>
                        <p className="self-center mx-6"> ${item.price}</p>
                       <a onClick={() => removeItem(item)} href="#" className="self-center mx-6"><p >X</p></a> 
                </div>
                
            ))}
            <p className="self-end text-3xl font-light">Total: ${getCartTotal()}</p>
            </div>
           
        </div>
    )
}

export default CartList;
