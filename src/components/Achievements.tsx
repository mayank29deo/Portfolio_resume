"use client";
import { achievements } from "@/data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">// achievements</p>
        <h2 className="section-title">Milestones & Recognition</h2>
        <p className="section-sub">Highlights from my academic and professional journey.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="card p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center text-2xl mb-5 group-hover:border-cyan-400/20 transition-all">
                  {a.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm leading-snug">{a.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
