import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import LikeButton from './components/LikeButton'
import PhotoCard from './components/PhotoCard'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      </div>
  )
}

export default App
