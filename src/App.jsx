import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Inquiry from './components/Inquiry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Inquiry />
      </div>
  )
}

export default App
