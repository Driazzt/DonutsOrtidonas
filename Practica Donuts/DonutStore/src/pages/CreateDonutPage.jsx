import React from 'react'
import CreateDonutComponent from '../components/CreateProducts/CreateProductsComponent'
import OrtidonasLogoTransp1 from "../assets/OrtidonasLogoTransp1.png"


const CreateDonutPage = () => {
    return (
        <div>
            <img src={OrtidonasLogoTransp1} />
            <CreateDonutComponent />
        </div>
    )
}

export default CreateDonutPage