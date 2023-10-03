import React from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routing/MainRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <MainRoutes />
    <Footer />
    </>
  )
}

export default App