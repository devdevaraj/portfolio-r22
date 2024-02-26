"use client"
import { _skills } from "@r22/data/skills";
import { useEffect, useState } from "react";

export default function Skills() {
 // const [skillsToDisplay, setSkillsToDisplay] = useState([...(_skills.splice(0, 6))]);
 // console.log(">>>>", _skills);

 // useEffect(() => {
 //  let x = trimSkills(_skills);
 //  console.log(x);
 //  setSkillsToDisplay(x);
 // }, []);
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
  return `${bp == "es" ? "" : bp+":"}${(int >= value*2) ? "hidden" : "flex"}`;
 }).filter(i => i.split(":")[1] !== "");

 const getDelay = (int: number) => Object.entries(breakpoints).map((i,j) => {
  let bp = i[0] === "es" ? "" : `${i[0]}:`;
  let value = breakpoints[i[0]];
  return `${bp}delay-[${100*(int%value)}ms]`;
 })

 return (
  <section className="min-h-svh min-w-svh flex flex-col items-center justify-start p-5 overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h1>SKILL</h1>
   </header>
   <section className="flex-grow w-full pt-2">
    <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto translate-y-1 border-2"></aside>
    <section className="w-full h-full grid grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-hidden">
     {_skills.map((item, index) => (
      <article
      key={index}
      className={`aspect-portrait px-4 items-center flex flex-col reveals translate-y-full opacity-0 ${getVisible(index).join(" ")} ${getDelay(index).join(" ")}`}>
       <article className="h-5 w-1 border-2"></article>
       <article className="flex-1 w-full relative">
        <article className="bg-slate-700 absolute h-full w-full"></article>
       </article>
       <article className="h-5 w-1 border-2"></article>
      </article>
     ))}
    </section>
     <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto -translate-y-1 border-2"></aside>
     <aside className="text-center text-white cursor-pointer">Wnna see more?</aside>
   </section>
  </section>
 );
}

// function trimSkills(skills: String[]) {
//  console.log("trimm func:", skills);
 
//  if (window.innerWidth < 640) return skills.splice(0, 6);
//  if (window.innerWidth < 768) return skills.splice(0, 9);
//  if (window.innerWidth < 1024) return skills.splice(0, 12);
//  if (window.innerWidth < 1280) return skills.splice(0, 15);
//  return skills.splice(0, 18);
// }