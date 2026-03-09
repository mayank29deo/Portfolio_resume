"use client";
import { skills } from "@/data/resume";

const categoryColors: Record<string, string> = {
  "Languages":             "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20",
  "Frameworks & Libraries":"from-purple-500/20 to-purple-500/5 border-purple-500/20",
  "Data & Analytics":      "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20",
  "Tools & Platforms":     "from-orange-500/20 to-orange-500/5 border-orange-500/20",
  "Hardware":              "from-pink-500/20 to-pink-500/5 border-pink-500/20",
};

const tagColors: Record<string, string> = {
  "Languages":             "bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20",
  "Frameworks & Libraries":"bg-purple-400/10 text-purple-300 border-purple-400/20 hover:bg-purple-400/20",
  "Data & Analytics":      "bg-emerald-400/10 text-emerald-300 border-emerald-400/20 hover:bg-emerald-400/20",
  "Tools & Platforms":     "bg-orange-400/10 text-orange-300 border-orange-400/20 hover:bg-orange-400/20",
  "Hardware":              "bg-pink-400/10 text-pink-300 border-pink-400/20 hover:bg-pink-400/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">// technical skills</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-sub">Technologies and tools I use to build and analyze.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={`card p-6 bg-gradient-to-br ${categoryColors[category] ?? "from-slate-500/10 to-slate-500/5 border-slate-500/20"}`}>
              <h3 className="font-semibold text-sm mb-4 text-white/80 tracking-wide">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default select-none ${tagColors[category] ?? "bg-slate-400/10 text-slate-300 border-slate-400/20"}`}>
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
