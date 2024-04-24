"use client"
// import { _skills } from "@r22/data/skills";
import _skills from "@r22/data/skills.json";

export default function Skills() {
 const breakpoints: { [key: string]: number} = {
  es: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 6
 }
 const getVisible = (int: number) => Object.entries(breakpoints).map((i,j) => {
  let bp = i[0];
  let value = breakpoints[bp];
  return `${bp == "es" ? "" : bp+":"}${(int >= value*3) ? "hidden" : "flex"}`;
 }).filter(i => i.split(":")[1] !== "");

 const getDelay = (int: number) => Object.entries(breakpoints).map((i,j) => {
  let bp = i[0] === "es" ? "" : `${i[0]}:`;
  let value = breakpoints[i[0]];
  return `${bp}delay-[${100*(int%value)}ms]`;
 })

 return (
  <section className="min-h-svh min-w-svh flex flex-col items-center justify-start p-1 sm:p-5 overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h1>SKILL</h1>
   </header>
   <section className="flex-grow w-full pt-2">
    <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto translate-y-1 border-2 border-slate-500"></aside>
    <section className="w-full h-full grid grid-rows-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-hidden">
     {_skills.map((item, index) => (
      <article
      key={index}
      className={`aspect-portrait px-4 items-center flex flex-col reveals translate-y-full opacity-0 ${getVisible(index).join(" ")} ${getDelay(index).join(" ")}`}>
       <article className="h-5 w-1 border-2 border-slate-500"></article>
       <article className="flex-1 w-full border-4 border-slate-500 rounded-sm relative">
        <article className="bg-slate-700 absolute -z-10 opacity-50 h-full w-full"></article>
        <aside className="text-white h-full w-full flex flex-col items-center justify-center">{item.name}</aside>
       </article>
       <article className="h-5 w-1 border-2 border-slate-500"></article>
      </article>
     ))}
    </section>
     <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto -translate-y-1 border-2 border-slate-500"></aside>
     <aside className="text-center text-white cursor-pointer">Wnna see more?</aside>
   </section>
  </section>
 );
}