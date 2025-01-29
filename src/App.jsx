import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Head from './components/Head/Head'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Head/>
      <Title subTitle="Our PROGRAM" title="What We Offer"/>
      <Program/>
      <About/>
      <Title subTitle="GALLERY" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="TESTIMONIALS" title="What Student Says"/>
      <Testimonials/>
      <Title subTitle="CONTACT" title="Get in Touch"/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App