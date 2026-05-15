"use client"
import { Tilt } from "react-tilt";
import _projects from "@r22/data/projects.json";
import NoSsr from "@r22/providers/no-ssr";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
 return (
  <main className="max-w-screen-2xl m-auto min-h-svh w-full p-5 sm:p-9 flex flex-col items-center justify-start gap-5 sm:gap-10 pt-20 pb-10">
   <div className="w-full flex justify-start mb-4">
    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
     <span className="mr-2">←</span> Back to Home
    </Link>
   </div>

   <header className="relative w-full max-w-screen-2xl flex justify-center mb-10 mt-5">
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-shadow-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 tracking-widest z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
     ALL PROJECTS
    </h1>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 -z-0"></div>
   </header>

   <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 sm:gap-10">
    <NoSsr>
     {_projects.map((project, index) => {
      const delay = (index % 4) * 150;
      return (
       <article
        key={index}
        className={`flex-1 basis-80 aspect-portrait rounded-2xl reveals translate-y-10`}
        style={{ transitionDelay: `${delay}ms` }}>
        <Tilt
         options={{
          max: 15,
          scale: 1.02,
          speed: 400
         }}
         className="h-full w-full relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] group cursor-pointer transition-all duration-300">
         <div className="relative w-full h-[55%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
          <Image
           src={`${project.assets_path}/${project.thumbnail}`}
           fill
           className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
           alt="Project thumbnail"
          />
         </div>
         <div className="relative w-full h-[45%] p-6 flex flex-col justify-end bg-gradient-to-b from-slate-900/80 to-slate-900 z-20">
          <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:w-16 transition-all duration-500"></div>
          <h1 className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 drop-shadow-sm mb-2">{project.name}</h1>
          <Link href={`/projects/${project.page}`} className="text-xs font-semibold tracking-widest text-cyan-400/80 uppercase group-hover:text-cyan-300 hover:text-cyan-200 transition-colors mt-auto inline-block">
           Explore Project ↗
          </Link>
         </div>
        </Tilt>
       </article>
      );
     })}
    </NoSsr>

   </section>
  </main>
 );
}