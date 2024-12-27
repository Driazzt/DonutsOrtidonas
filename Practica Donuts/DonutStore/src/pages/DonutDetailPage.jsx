import React from 'react'
import ProductDetailsComponent from '../components/ProductsDetails/ProductDetailsComponent'
import OrtidonasLogoTransp1 from "../assets/OrtidonasLogoTransp1.png"



const DonutDetailPage = () => {
    return (
        <div>
            <img src={OrtidonasLogoTransp1} />
            <ProductDetailsComponent />
        </div>
    )
}

export default DonutDetailPage