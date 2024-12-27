import React from 'react'
import OrtidonasLogoTransp1 from "../assets/OrtidonasLogoTransp1.png"
import { useNavigate } from 'react-router-dom'
import InstagramIcon from '../components/Icons/InstagramIcon/Instagram'
import FacebookIcon from '../components/Icons/FacebookIcon/Facebook'
import TwitterIcon from '../components/Icons/TwitterIcon/Twitter'


const ContactPage = () => {

    const navigate = useNavigate()
    const goHomePage = () => {
        navigate("/")
    }
    const goProductList = () => {
        navigate("/productList")
    }


    return (
        <div>
            <img src={OrtidonasLogoTransp1} />
            <div>
                <h2 style={{ marginTop: -70, }}>Best Donuts in Town</h2>
                <h5 style={{ marginTop: -10, }}>♥ Made with love ♥</h5>
            </div>
            <br />
            <div>
                <h1>Contact Us</h1>
                <p>Thank you for visiting <strong>Ortidonas</strong>, your favorite artisanal donut shop! We're here to sweeten your day with the finest ingredients and lots of love in every bite.</p>
                <p>If you have any questions, suggestions, or just want to say hello, feel free to reach out to us. We'd love to hear from you!</p>
            </div>
            <div>
                <h2>Address:</h2>
                <p>123 Sweet Dream Street
                    Donutlandia District, Flavor City
                    ZIP Code: 45678</p>
            </div>
            <div>
                <h2>Phone:</h2>
                <p>+1 555-123-4567</p>
            </div>
            <div>
                <h2>Business Hours:</h2>
                <div>
                    <ul>Monday to Friday: 8:00 AM - 6:00 PM</ul>
                    <ul>Saturday: 9:00 AM - 5:00 PM</ul>
                    <ul>Sunday: Closed</ul>
                </div>
            </div>
            <div>
                <h2>Social Media:</h2>
                <p>Follow us on social media to stay up to date with the latest news and promotions!</p>
                <br />
                <div style={{ marginRight: 60 }}>
                    <ul><a href="https://instagram.com/Ortidonas" style={{ color: "hotpink" }} target="_blank"> <InstagramIcon /> @Ortidonas</a></ul>
                    <ul><a href="https://facebook.com/Ortidonas" target="_blank"> <FacebookIcon /> Ortidonas - Artisanal Donuts</a></ul>
                    <ul><a href="https://twitter.com/OrtidonasDonuts" target="_blank"><TwitterIcon /> @OrtidonasDonuts</a></ul>
                </div>

            </div>

            <br />

            <div>
                <button style={{ marginRight: 20 }} onClick={goProductList}>Product List</button>
                <button style={{ marginLeft: 20 }} onClick={goHomePage}>Home</button>
            </div>
        </div>


    )
}

export default ContactPage