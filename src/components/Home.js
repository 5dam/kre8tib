import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import About from './About'
import Services from './Services'
import ClientsPage from './ClientsPage'
import Footer from './Footer'


const Home = () => {
  return (
    <>
        <div className='font-mono'>
            <div className='bg-primary'>
                <Header />
                <HeroSection />
            </div>
            <About />
            <Services />  
            <ClientsPage />        
            <Footer />     
        </div>         
    </>
  )
}

export default Home