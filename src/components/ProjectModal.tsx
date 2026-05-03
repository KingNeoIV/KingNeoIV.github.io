import { useState } from 'react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Logic: Show video by default if it exists, otherwise show screenshots
  const [activeMedia, setActiveMedia] = useState(project.video ? 'video' : 'screenshots');
  const [imgIndex, setImgIndex] = useState(0);

  return (
    // "fixed inset-0" covers the whole screen. 
    // "flex items-center justify-center" centers the modal box.
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
      
      {/* BACKDROP: "bg-black/90" is the 90% opacity dark background */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* MODAL CARD: 
          "max-w-5xl" sets the large width.
          "max-h-[90vh]" prevents it from going off the top/bottom of the screen.
          "bg-zinc-900" and "border-white/10" give it that dark-themed style.
          "rounded-2xl" gives the large rounded corners. */}
      <div className="relative bg-zinc-900 border border-white/10 w-full max-w-5xl max-h-[140vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in duration-300">
        
        {/* INNER PADDING: "p-6 sm:p-10" creates the space between the edge and content */}
        <div className="p-6 sm:p-10">
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-50 text-gray-500 hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* 1. MEDIA SECTION: Handles Videos & Screenshots */}
          {(project.video || (project.screenshots && project.screenshots.length > 0)) && (
            <div className="mb-10 rounded-xl overflow-hidden bg-black aspect-video relative border border-white/5 shadow-2xl group">
              {activeMedia === 'video' && project.video ? (
                <video 
                  src={project.video} 
                  controls 
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  src={project.screenshots?.[imgIndex]} 
                  className="w-full h-full object-contain animate-in fade-in duration-500" 
                  alt="Project Preview" 
                />
              )}

              {/* Navigation for Screenshots */}
              {activeMedia === 'screenshots' && project.screenshots?.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <button 
                    onClick={() => setImgIndex(i => (i === 0 ? project.screenshots.length - 1 : i - 1))}
                    className="pointer-events-auto w-10 h-10 bg-black/50 rounded-full text-white hover:bg-emerald-500 transition flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => setImgIndex(i => (i === project.screenshots.length - 1 ? 0 : i + 1))}
                    className="pointer-events-auto w-10 h-10 bg-black/50 rounded-full text-white hover:bg-emerald-500 transition flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              )}

              {/* MEDIA TOGGLE: This uses 'setActiveMedia', fixing your TypeScript error */}
              {project.video && project.screenshots && project.screenshots.length > 0 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 p-1.5 rounded-full border border-white/10 z-20">
                  <button 
                    onClick={() => setActiveMedia('video')} 
                    className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMedia === 'video' ? 'bg-emerald-500 text-black' : 'text-white hover:bg-white/10'}`}
                  >
                    Watch Video
                  </button>
                  <button 
                    onClick={() => setActiveMedia('screenshots')} 
                    className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMedia === 'screenshots' ? 'bg-emerald-500 text-black' : 'text-white hover:bg-white/10'}`}
                  >
                    View Slides
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 2. HEADER SECTION */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 3. CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-300">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                {project.fullDescription || project.description}
              </p>
              
              {project.features && (
                <div>
                  <h4 className="text-emerald-500 font-bold uppercase text-xs tracking-widest mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f: string) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Engineering Challenges Section */}
            {project.challenges && (
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="text-emerald-500 italic">#</span> Engineering Challenges
                </h4>
                <div className="space-y-4">
                  {project.challenges.map((c: string) => (
                    <p key={c} className="text-sm italic text-gray-400 border-l-2 border-emerald-500/30 pl-4 py-1">
                      "{c}"
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. ACTION BUTTONS */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-4">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-all border border-white/10"
            >
              View Repository
            </a>
            
            {project.download ? (
              <a 
                href={project.download} 
                download 
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all"
              >
                Download Installer (.exe)
              </a>
            ) : (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all"
              >
                {project.title.includes("Portfolio") ? "Visit Update Site" : "Visit Site"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}