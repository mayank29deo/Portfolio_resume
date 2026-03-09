"use client";
import { personal } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white">MN</div>
          <span className="text-sm font-semibold text-slate-400">Mayank Narayan</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["#about","#skills","#experience","#projects","#contact"].map((h) => (
            <a key={h} href={h} className="text-xs text-slate-600 hover:text-slate-400 transition-colors capitalize">{h.slice(1)}</a>
          ))}
        </div>
        <p className="text-xs text-slate-700">© {year} {personal.name} · Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
