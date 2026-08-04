import { Canvas } from "@react-three/fiber";
import FooterScene from "./3d/footer-scene";
import { useRef } from "react";
import Link from "next/link";

export default function Footer() {
 const ref = useRef<HTMLElement>(null!);
 return (
  <footer ref={ref} className="relative w-full h-screen bg-transparent">
   <main className="absolute inset-0 flex flex-col items-center justify-end z-10 pointer-events-none">
    <section className="w-full text-white flex flex-col justify-end pb-10 pt-24 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-auto">
     <div className="w-full max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-5 sm:px-10">

      {/* Left Column: About / Logo */}
      <div className="flex flex-col gap-5">
       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">DEVARAJ</h2>
       <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
        Software engineer who knows how to plan, design and develop! Building premium digital experiences with a focus on modern UI/UX, immersive 3D, and scalable architectures.
       </p>
      </div>

      {/* Middle Column: Quick Links */}
      <div className="flex flex-col gap-5 md:items-center">
       <div className="flex flex-col gap-5 w-full md:w-auto">
        <h3 className="text-sm font-bold text-slate-200 tracking-[0.2em] uppercase border-b border-slate-700/50 pb-2">Navigation</h3>
        <ul className="flex flex-col gap-3">
         <li>
          <Link href="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3 group w-fit">
           <span className="w-0 h-px bg-cyan-400 group-hover:w-6 transition-all duration-300"></span>
           Projects Gallery
          </Link>
         </li>
         <li>
          <Link href="/blogs" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3 group w-fit">
           <span className="w-0 h-px bg-cyan-400 group-hover:w-6 transition-all duration-300"></span>
           Tech Articles
          </Link>
         </li>
         <li>
          <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3 group w-fit">
           <span className="w-0 h-px bg-cyan-400 group-hover:w-6 transition-all duration-300"></span>
           Return to Home
          </Link>
         </li>
        </ul>
       </div>
      </div>

      {/* Right Column: Connect */}
      <div className="flex flex-col gap-5 md:items-end">
       <div className="flex flex-col gap-5 w-full md:w-auto">
        <h3 className="text-sm font-bold text-slate-200 tracking-[0.2em] uppercase border-b border-slate-700/50 pb-2 md:text-right">Connect</h3>
        <ul className="flex flex-col gap-4">
         <li>
          <a href="mailto:contact@devaraj.dev" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-4 group justify-start md:justify-end">
           <span className="hidden md:inline-block">contact@devaraj.dev</span>
           <span className="bg-slate-800/80 p-2 rounded-full border border-slate-700/50 group-hover:bg-cyan-900/50 group-hover:border-cyan-500/50 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
           </span>
           <span className="md:hidden">contact@devaraj.dev</span>
          </a>
         </li>
         <li>
          <a href="tel:+919946353821" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-4 group justify-start md:justify-end">
           <span className="hidden md:inline-block">+91 994 635 3821</span>
           <span className="bg-slate-800/80 p-2 rounded-full border border-slate-700/50 group-hover:bg-cyan-900/50 group-hover:border-cyan-500/50 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
           </span>
           <span className="md:hidden">+91 994 635 3821</span>
          </a>
         </li>
         <li className="flex gap-4 mt-2 justify-start md:justify-end">
          <a href="https://github.com/devdevaraj" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all p-3 border border-slate-700/50 bg-slate-800/80 rounded-full hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/devdevaraj" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all p-3 border border-slate-700/50 bg-slate-800/80 rounded-full hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://buymeacoffee.com/devdevaraj" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all p-3 border border-slate-700/50 bg-slate-800/80 rounded-full hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
          </a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </section>

    <section className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent pointer-events-auto"></section>

    <section className="text-slate-400 text-[0.65rem] sm:text-xs font-light py-5 text-center bg-slate-950 w-full pointer-events-auto">
     Powered by Devaraj P V &nbsp;|&nbsp; Copyright &copy; {(new Date()).getFullYear()} &nbsp;
     <a href="https://www.devaraj.dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-medium">
      www.devaraj.dev
     </a>
    </section>
   </main>

   <main className="fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 500] }}>
     <FooterScene mainRef={ref} />
    </Canvas>
   </main>
  </footer>
 );
}