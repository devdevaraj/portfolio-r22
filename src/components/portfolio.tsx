"use client"
import { Tilt } from "react-tilt";

import _projects from "@r22/data/projects.json";
import NoSsr from "@r22/providers/no-ssr";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {

 const breakpoints: { [key: string]: number } = {
  es: 1,
  sm: 2,
  md: 3,
  lg: 4,
 }

 const getVisible = (int: number) => Object.entries(breakpoints).map((i, j) => {
  let bp = i[0];
  let value = breakpoints[bp];
  return `${bp == "es" ? "" : bp + ":"}${(int >= value * 3) ? "hidden" : "flex"}`;
 }).filter(i => i.split(":")[1] !== "");

 const getPosition = (i: number) => `${(i % 4 === 0 || i % 4 === 1) ? "-" : ""}translate-x-40`;
 const getRandomDelay = () => Math.floor(Math.random() * 5) * 200;
 return (
  <main className="max-w-screen-2xl m-auto min-h-svh w-full p-5 sm:p-9 flex flex-col items-center justify-start gap-5 sm:gap-10 overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h2 className="translate-y-40 opacity-0 reveals">
     WHAT HAVE I DONE SO FAR
    </h2>
   </header>
   <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 sm:gap-10">
    <NoSsr>
     {_projects.map((project, index) => (
      <article
       key={index}
       className={`flex-1 basis-80 aspect-portrait rounded-2xl ${getPosition(index)} ${getVisible(index).join(" ")} delay-[${getRandomDelay()}ms] opacity-0 reveals`}>
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
     ))}
    </NoSsr>
   </section>
   <section className="text-center text-white cursor-pointer">
    <Link href={"/projects"} >Explore more</Link>
   </section>
  </main>
 );
}