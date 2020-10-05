import React from 'react'
import ProductCard from './ProductCard'
const Synth = () => {
    return (
        <div className="lg:p-16 flex flex-col h-screen">
            <h1 className="text-5xl font-light">Synthesizers</h1>
            <div className="flex lg:flex-row flex-col my-8">
                <ProductCard/>
            </div>
        </div>
    )
}

export default Synth
