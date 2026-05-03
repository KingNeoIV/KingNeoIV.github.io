import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Toolkit</h2>
          <div className="h-1 w-20 bg-emerald-500"></div>
          <p className="mt-4 text-gray-400">The languages and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-emerald-400 font-mono text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:border-emerald-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}