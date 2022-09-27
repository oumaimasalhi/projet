import React from 'react'
import Banner from '../Pages/Banner'
import NavBar from './NavBar'
import Category from './Category'
import Footer from './Footer'
import AboutUs from './AboutUs'


const Home = () => {
  
  return (
    <div>
        <NavBar/>
        <Banner />
        <Category />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Home