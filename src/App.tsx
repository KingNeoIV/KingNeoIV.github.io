import Navbar from './components/Navbar' // Make sure you created the file in step 1!

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* 1. The Navbar stays at the top */}
      <Navbar />
      
      {/* 2. Main content area with padding-top (pt-16) so the navbar doesn't cover the text */}
      <main className="flex items-center justify-center min-h-screen pt-16">
        <h1 className="text-6xl font-bold text-emerald-500 tracking-tighter">
          Michael Rios: Phase 2
        </h1>
      </main>
    </div>
  )
}

export default App