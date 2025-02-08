import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import MarketOverview from './components/MarketOverview'
import Features from './components/Features'
import Products from './components/Products'
import AccountTypes from './components/AccountTypes'
import Testimonials from './components/Testimonials'
import HowToStart from './components/HowToStart'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ChatBot from './components/ChatBot'
import { ThemeProvider } from './context/ThemeContext'
import './styles/themes.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <NavBar />
        <main>
          <Hero />
          <MarketOverview />
          <Features />
          <Products />
          <AccountTypes />
          <Testimonials />
          <HowToStart />
        </main>
        <Footer />
        <BackToTop />
        <ChatBot />
      </div>
    </ThemeProvider>
  )
}

export default App
