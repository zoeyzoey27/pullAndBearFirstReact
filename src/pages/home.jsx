import React from 'react'
import Announcement from '../components/announcement'
import Categories from '../components/categories'
import Footer from '../components/footer'
import Gender from '../components/gender'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Products from '../components/products'
import Slider from '../components/slider'



const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Gender/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
