"use client";
import { personal } from "@/data/resume";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "cyan" },
  { label: "LinkedIn", value: "linkedin.com/in/mayank-narayan", href: personal.linkedin, color: "purple" },
  { label: "GitHub", value: "github.com/mayank29deo", href: personal.github, color: "emerald" },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, color: "orange" },
];

const colorMap: Record<string, string> = {
  cyan:    "border-cyan-400/20 bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40",
  purple:  "border-purple-400/20 bg-purple-400/10 text-purple-400 group-hover:bg-purple-400/20 group-hover:border-purple-400/40",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/40",
  orange:  "border-orange-400/20 bg-orange-400/10 text-orange-400 group-hover:bg-orange-400/20 group-hover:border-orange-400/40",
};

const icons: Record<string, React.ReactNode> = {
  Email: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  LinkedIn: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44l.03 6.3ZM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>,
  GitHub: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.7 10.7 0 015.72 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>,
  Phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">// contact</p>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="text-slate-400 text-base mb-12 leading-relaxed">
          I&apos;m actively looking for internships, full-time roles, and exciting projects.
          Whether you have an opportunity or just want to say hi — my inbox is always open.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" className="card p-5 flex items-center gap-4 group text-left">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-200 ${colorMap[l.color]}`}>
                {icons[l.label]}
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">{l.label}</div>
                <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">{l.value}</div>
              </div>
            </a>
          ))}
        </div>
        <a href={`mailto:${personal.email}`} className="btn-primary text-base inline-flex items-center gap-2">
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}
