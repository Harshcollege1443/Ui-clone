import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Show from './components/Show'
import Shine from './components/Shine'
import Third from './components/Third'
import Carousel from './components/Carousel'
import ThreeUpCarousel from './components/ThreeUpCarousel'
import NikeLoginPopup from './components/NikeLoginPopup'




function App() {
  

  return (
    <>
    <NikeLoginPopup/>
   <Nav />
   <Header/>
   <Carousel/>
   <Show/>
   <Shine/>
   <Third/>
   <ThreeUpCarousel/>
   <Hero/>
   <Footer/>
    </>
  )
}

export default App
