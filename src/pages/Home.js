import React from 'react'
import Homesection1 from '../sections/Homesection1'
import Navbar from "../components/Navbar.js"
import Homesection2 from '../sections/Homesection2'
// import Carousel from '../sections/Carousal'
import Carousel2 from '../sections/Carousal2'
// import Footer from '../components/Footer'
import Steps from '../sections/Steps'
import Homesection3 from '../sections/Homesection3'
import Footer2 from '../components/Footer2'

const Home = () => {
  return (
   <>
   {/* <Navbar/> */}
   <Homesection1/>
   <Homesection2/>
   <Carousel2/>
   <Steps/>
   <Homesection3/>
   {/* <Footer/> */}

   <Footer2/>
   </>
  )
}

export default Home