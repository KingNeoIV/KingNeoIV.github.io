import { projects } from '../data/projects';

export default function ProjectGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group relative bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}