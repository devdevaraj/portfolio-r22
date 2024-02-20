"use client"
import { _skills } from "@r22/data/skills";
import { useEffect } from "react";

export default function Skills() {
 useEffect(() => {
  window.addEventListener("resize", () => {
   console.log(window.innerWidth);
   
  })
 })

 return (
  <section className="min-h-svh min-w-svh flex flex-col items-center justify-start p-5 overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h1>SKILL</h1>
   </header>
   <section className="flex-grow w-full pt-2 border-2">
    <aside className="w-9/12 m-auto border-2"></aside>
    <section className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-5 overflow-hidden">
     {_skills.fill("r").map((item, index) => (
      <article
       key={index}
       className={`aspect-portrait px-4 items-center flex flex-col reveals translate-y-full opacity-0 delay-[${100 * (index % 4)}ms]`}>
       <article className="h-8 w-1 border-2"></article>
       <article className="flex-1 w-full relative">
        <article className="bg-slate-700 absolute h-full w-full"></article>
       </article>
      </article>
     ))}
    </section>
   </section>
  </section>
 );
}