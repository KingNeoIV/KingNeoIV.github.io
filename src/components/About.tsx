export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Photo & Quick Facts */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8 items-center lg:items-start">
            {/* Profile Picture with Glow Effect */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="/ProfilePic.png" 
                alt="Michael Rios" 
                className="relative w-64 h-64 object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>

            {/* Quick Facts Card */}
            <div className="relative w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-10"></div>
              <div className="relative bg-zinc-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-xl h-full">
                <h3 className="text-white font-bold mb-4 text-lg">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                    <span>Victoria, Texas</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                    <span>Full-Stack & Game Dev Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                    <span>Texas A&M University–Victoria</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                    <span>Project: u-sell-it</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Text */}
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
              <span className="text-white"> u-sell-it</span> or exploring the logic behind 
              <span className="text-white"> Game Development</span>, I love the 
              process of turning a blank text editor into a functional product.
            </p>
            <p>
              When I'm not at my desk, you'll likely find me diving into <span className="text-white">C++ projects</span>, 
              sharpening my <span className="text-white">math skills</span>, or experimenting with new game mechanics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}