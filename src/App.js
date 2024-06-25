import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About.jsx/About.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import ContactUs from './Components/Contact/ContactUs.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title Title="Our Programs" SUbTitle="GO FOR THE BEST COURSES WITH US" />
        <Programs />
        <About />
        <Title Title="Our Gallery" SUbTitle="Choose Your Best Gallery Images" />
        <Gallery />
        <Title Title="Testimonials" SUbTitle="What Our Students Says" />
        <Testimonials />
        <Title Title="Contact Us" SUbTitle="Want to say something get in touch" />
        <ContactUs/>
        <Footer/>
      </div>
    </>
  )
}

export default App
