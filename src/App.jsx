import Nav from './view/Nav'
import Hero from './view/Hero'
import About from './view/About'
import Portfolio from './view/Portfolio'
import './fonts/league-spartan/LeagueSpartan-Bold.otf'
import './App.css'

function App() {
  return (
    <div className=' overflow-hidden'>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
    </div>
  )
}

export default App
