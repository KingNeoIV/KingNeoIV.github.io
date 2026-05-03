export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 text-gray-400 text-lg">
            I'm currently looking for new opportunities and would love to hear about your projects. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="bg-zinc-900/40 border border-white/10 p-10 rounded-2xl backdrop-blur-md">
          <a 
            href="mailto:michael.rios.kingnoeiv@gmail.com" 
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 mb-8"
          >
            Send Me an Email
          </a>
          
          <div className="flex justify-center gap-6">
             {/* We can add simple text links or icons later */}
             <a href="https://github.com/KingNeoIV" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
             <span className="text-zinc-700">|</span>
             <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}