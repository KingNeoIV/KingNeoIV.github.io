export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm font-mono">
          © {currentYear} Michael Rios. Built with React + Vite.
        </div>
        
        <div className="flex gap-8">
          <a 
            href="https://github.com/KingNeoIV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/michael-rios-/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:michael.rios.nw@gmail.com"
            className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}