import React, {useContext} from 'react'


function ProductCard(props) {
    
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={`${props.product.img}`} alt="picture"/>
        <div class="px-6 py-4">
          <div class="font-bold text-sm  ">{props.product.title}</div>
        </div>
        <div class="px-6 py-4">
          <span>Price: $1899</span>
        </div>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>add to cart</button>

      </div>
    )
}

export default ProductCard
