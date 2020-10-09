import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Synth = () => {
    const { products } = useContext(ProductContext);

    const synth = products.filter(item => item.category_id === 3)
    return (
        <div className="lg:p-16 flex flex-col h-screen">
        <h1 className="text-5xl font-light">Bass</h1>
        <div className="flex lg:flex-row flex-col my-8">
        {synth.map(item => (
                    <Link to={`/synth/${item.id}`} key={item.id} ><ProductCard item={item}/></Link> 
                ))}
            </div>
    </div>
    )
}

export default Synth
