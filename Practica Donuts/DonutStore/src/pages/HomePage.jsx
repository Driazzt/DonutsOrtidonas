import OrtidonasLogoTransp1 from "../assets/OrtidonasLogoTransp1.png"
import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate();

    const goContact = () => {
        navigate("/contact")
    }

    const goProductList = () => {
        navigate("/productList")
    }

    const goCreateDonut = () => {
        navigate("/createDonut")
    }

    return (
        <div>
            <img src={OrtidonasLogoTransp1} />

            <div>
                <div style={{ color: "black", fontFamily: "Dunkin", fontWeight: "bold" }}>
                    <h2 style={{ marginTop: -70 }}>Best Donuts in Town</h2>
                    <h5 style={{ marginTop: -10 }}>♥ Made with love ♥ </h5>
                </div>
                <br />
                <div>
                    <button onClick={goProductList} style={{ marginRight: 60 }}>Products List</button>
                    <button onClick={goCreateDonut}>Create your Donut!</button>
                    <button onClick={goContact} style={{ marginLeft: 60 }}>Contact Us!</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage