import React, {useContext} from 'react'
import { CartContext } from "../contexts/CartContext";


function CartList() {
    const { cart } = useContext(CartContext);
    return (
        <div className="lg:p-16 flex flex-col h-screen">
            <h1 className="text-5xl font-light ml-16">Your Cart</h1>
            <div className="flex flex-col p-20">
            {cart.map(item => (
                <div className="flex ">
                        <img className=" w-48 h-auto mx-6" src={`${item.img_url}`} alt="item"/>
                        <p className="self-center mx-6">{item.name}</p>
                </div>
                
            ))}
            </div>
           
        </div>
    )
}

export default CartList;
