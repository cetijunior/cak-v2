import React from 'react'
import '/styles/globals.css';
import Navbar from '@/components/Navbar';
import Hero from '../Hero';
import Footer from '@/components/Footer';

const mobdev = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default mobdev