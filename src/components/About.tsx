export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-white font-semibold">Michael Rios</span>, a software engineer 
              driven by the challenge of building scalable, user-centric applications. My journey into 
              programming started with a curiosity about how digital experiences are crafted, which led 
              me to dive deep into the world of full-stack development.
            </p>
            <p>
              Currently, I'm focusing on mastering the <span className="text-emerald-400">React & TypeScript</span> ecosystem. 
              Whether I'm debugging complex logic in a marketplace application like 
              <span className="text-white"> u-sell-it</span> or exploring the boundaries of 
              <span className="text-white"> Virtual Reality</span> with the Quest 3S, I love the 
              process of turning a blank text editor into a functional product.
            </p>
            <p>
              When I'm not at my desk, you'll likely find me diving into C++ projects, 
              sharpening my math skills, or exploring immersive VR worlds.
            </p>
          </div>

          {/* Visual "Stats" Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
              <h3 className="text-white font-bold mb-6 text-xl">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                  <span>Based in Victoria, Texas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                  <span>Full-Stack & VR Enthusiast</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                  <span>Currently building: <span className="text-emerald-400">u-sell-it</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                  <span>Goal: Scalable Software Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}