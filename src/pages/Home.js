import React from 'react'
import Homesection1 from '../sections/Homesection1'
import Navbar from "../components/Navbar.js"
import Homesection2 from '../sections/Homesection2'
import Carousel from '../sections/Carousal'
import Footer from '../components/Footer'
import Steps from '../sections/Steps'
import TenantCard2 from '../components/TenantCard2'
const Home = () => {
  return (
   <>
   <Navbar/>
   <Homesection1/>
   <Homesection2/>
   <Carousel/>
   <Steps/>
   <Footer/>
   <TenantCard2/>
   </>
  )
}

export default Home