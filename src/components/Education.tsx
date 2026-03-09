"use client";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">// education</p>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-sub">Building a strong foundation at every step.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <div key={i} className="card p-6 group">
              <div className="text-3xl mb-4">{edu.icon}</div>
              <div className="text-xs font-mono text-cyan-400 mb-2">{edu.year}</div>
              <h3 className="font-bold text-white text-sm leading-snug mb-2">{edu.degree}</h3>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">{edu.institution}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
