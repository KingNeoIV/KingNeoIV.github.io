import { useState, useEffect } from 'react'; // Added useEffect
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal'; 

export default function ProjectGrid() {
  // State to track the active project
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  // BUG FIX: Closes the modal if the user clicks a Navbar link while it's open
  useEffect(() => {
    const handleNavigation = () => {
      setSelectedProject(null);
    };

    // Listen for hash changes (e.g., #projects -> #contact)
    window.addEventListener('hashchange', handleNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const handleOpenProject = (project: typeof projects[0]) => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              onClick={() => handleOpenProject(project)}
              className="group relative bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}