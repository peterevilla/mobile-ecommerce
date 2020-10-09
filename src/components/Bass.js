import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Bass = () => {
    const { products } = useContext(ProductContext);

    const bass = products.filter(item => item.category_id === 2)
    return (
        <div className="lg:p-16 flex flex-col h-screen">
        <h1 className="text-5xl font-light">Bass</h1>
        <div className="flex lg:flex-row flex-col my-8">
        {bass.map(item => (
                    <Link to={`/bass/${item.id}`} key={item.id} ><ProductCard item={item}/></Link> 
                ))}
            </div>
    </div>
    )
}

export default Bass
