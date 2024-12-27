import React from 'react'
import ProductListComponent from '../components/Products/ProductListComponent'
import '../App.css'
import OrtidonasLogoTransp1 from "../assets/OrtidonasLogoTransp1.png"


const ProductListPage = () => {
    return (
        <div>
            <img src={OrtidonasLogoTransp1} />
            <ProductListComponent />
        </div>
    )
}

export default ProductListPage