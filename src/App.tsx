import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-emerald-500/30">
      <Navbar />
      <main>
        {/* pt-16 ensures content starts below the fixed navbar */}
        <div className="pt-16">
          <Hero />
          <ProjectGrid />
        </div>
      </main>
    </div>
  )
}

export default App