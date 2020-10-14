import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

function Guitar({addToCart}) {
    const { products } = useContext(ProductContext);

    const guitars = products.filter(item => item.category_id === 1)

    return (
        <div className="lg:p-16 flex flex-col h-screen">
            <h1 className="text-5xl font-light">Guitars</h1>
            <div className="flex lg:flex-row flex-col my-8">

                {guitars.map(item => (
                    <Link to={`/guitar/${item.id}`} key={item.id} ><ProductCard addToCart={addToCart} item={item}/></Link> 
                ))}
                
            </div>
        </div>
    )
}

export default Guitar
