import { useState } from 'react'
import Discovery from './components/Discovery'
import Doubletext from './components/Doubletext'
import Footer from './components/Footer'
import Getintouch from './components/Getintouch'
import Header from './components/Header'
import Hero from './components/Hero'
import Textimage from './components/Textimage'
import TextimageRV from './components/TextimageRV'
import Titleslider from './components/Titleslider'
import './styles/App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Doubletext />
      <Textimage />
      <TextimageRV />
      <Titleslider />
      <Discovery />
      <Getintouch />
      <Footer />
    </div>
  )
}

export default App
