import React from 'react'
import ProductCard from './ProductCard'

function Guitar() {
    return (
        <div className="lg:p-16 flex flex-col h-screen">
            <h1 className="text-5xl font-light">Guitars</h1>
            <div className="flex lg:flex-row flex-col my-8">
                <ProductCard/>
            </div>
        </div>
    )
}

export default Guitar
