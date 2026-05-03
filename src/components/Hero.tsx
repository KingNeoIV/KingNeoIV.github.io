export default function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
            Full-Stack Software Engineer
          </h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              experiences that scale.
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg lg:text-xl leading-relaxed">
            I'm Michael Rios. Currently focused on building full-stack applications with 
            React and TypeScript, like my marketplace project <span className="text-white">u-sell-it</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            {/* Primary Action: Scroll to Projects */}
            <a 
              href="#projects" 
              className="px-8 py-3 bg-emerald-500 text-black text-center font-bold rounded-lg hover:bg-emerald-400 transition-all transform hover:-translate-y-1"
            >
              View Projects
            </a>

            {/* Secondary Action: Resume Download */}
            <a 
              href="/Michael-Rios_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-emerald-500/50 text-emerald-500 text-center font-bold rounded-lg hover:bg-emerald-500/10 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}