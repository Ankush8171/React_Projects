import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/programs/program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/campus'
import Testimonals from './components/testimonals/Testimonals'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'


import './App.css'


function App() {
  
  return (
    <>
    <div>

      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle=' Our PROGRAM' title='What We Offer'/>
        <Program/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
         <Title subtitle='TESTIMONALS' title='What Student says'/>
         <Testimonals/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        


      </div>
      
      
    
    </div>

    
      
    </>
  )
}

export default App
