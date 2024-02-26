"use client"
import { Tilt } from "react-tilt";

import NoSsr from "@r22/providers/no-ssr";

export default function Portfolio() {
 const _projects = [
  { name: "PROJECT - 1" },
  { name: "PROJECT - 2" },
  { name: "PROJECT - 3" },
  { name: "PROJECT - 4" },
  { name: "PROJECT - 5" },
  { name: "PROJECT - 6" },
  { name: "PROJECT - 7" },
  { name: "PROJECT - 8" },
 ];
 const getPosition = (i: number) => `${(i % 4 === 0 || i % 4 === 1) ? "-" : ""}translate-x-40`;
 const getRandomDelay = () => Math.floor(Math.random() * 5) * 200;
 return (
  <main className="min-h-svh w-svw p-5 sm:p-10 flex flex-col items-center justify-start gap-5 sm:gap-10 overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h2 className="translate-y-40 opacity-0 reveals">
     WHAT HAVE I DONE SO FAR
    </h2>
   </header>
   <section className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 sm:gap-10">
    <NoSsr>
     {_projects.map((project, index) => (
      <article
       key={index}
       className={`flex-1 basis-80 aspect-portrait rounded-xl ${getPosition(index)} delay-[${getRandomDelay()}ms] opacity-0 reveals`}>
       <Tilt
        options={{
         max: 45,
         scale: 1,
         speed: 450
        }}
        className="h-full w-full relative">
        <aside className="absolute bg-slate-600 h-full w-full -z-40 overflow-hidden rounded-xl opacity-30"></aside>
        <h1 className="font-bold text-2xl text-center text-white p-5">{project.name}</h1>
       </Tilt>
      </article>
     ))}
    </NoSsr>
   </section>
   <section className="text-center text-white cursor-pointer">Explore more</section>
  </main>
 );
}