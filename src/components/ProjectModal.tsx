interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Background Dimmer/Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-zinc-900 border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            ✕
          </button>

          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-lg text-white/90">
              {project.description}
            </p>
            
            <div className="h-px bg-white/5 my-8" />
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all transform hover:scale-105"
              >
                View Repository
              </a>
              <button 
                onClick={onClose}
                className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white rounded-lg transition-all"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}