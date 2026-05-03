import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-emerald-500/30">
      <Navbar />
      <main>
        {/* We keep pt-16 to leave room for the fixed navbar */}
        <div className="pt-16">
          <Hero />
        </div>
      </main>
    </div>
  )
}

export default App