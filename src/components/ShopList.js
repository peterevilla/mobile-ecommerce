import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import {Link} from 'react-router-dom'


function ShopList() {
    const { products } = useContext(ProductContext)
    return (

        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 '>

            {products.map(item => (
                <Link to={`/shop/${item.id}`} key={item.id} ><ProductCard product={item}/> </Link>
            ))}
            
        </div>
        
    )
}

export default ShopList;
