import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Skills from './components/Skills'
import Footer from './components/Footer'
import NetworkBackground from './components/NetworkBackground'
import FadeIn from './components/FadeIn'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative text-white selection:bg-emerald-500/30">
      {/* The background stays fixed and ignores scrolling */}
      <NetworkBackground />

      <Navbar />
      
      <main>
        {/* Hero section stays on top of the background */}
        <div className="pt-16">
          <FadeIn>
            <Hero />
          </FadeIn>
          
          {/* 
            We wrap the content sections in a semi-transparent 'glass' container. 
            This makes the text readable while letting the animation peek through.
          */}
          <div className="relative bg-zinc-950/60 backdrop-blur-sm border-t border-white/5">
            <FadeIn delay={0.2}>
              <ProjectGrid />
            </FadeIn>

            <FadeIn delay={0.2}>
              <Skills />
            </FadeIn>

            <FadeIn delay={0.2}>
              <Contact />
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App