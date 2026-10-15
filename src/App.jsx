import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Inquiry from './components/Inquiry'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main>
      <Hero />
      <About />
      <Gallery />
      <Inquiry />
      </ main>
      <Footer />
      </div>
  )
}

export default App
