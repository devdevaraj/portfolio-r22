"use client"

import _blogs from "@r22/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogsPage() {
 const containerVars = {
  initial: {},
  animate: {
   transition: {
    staggerChildren: 0.05,
   },
  },
 };

 const childVars = {
  initial: { opacity: 0, y: 50 },
  animate: {
   opacity: 1,
   y: 0,
   transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
   },
  },
 };

 return (
  <main className="min-h-svh max-w-screen-2xl m-auto bg-transparent text-white flex flex-col items-center pt-10 pb-12 px-2 sm:px-5 overflow-x-hidden">
   <div className="w-full flex justify-start mb-4">
    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
     <span className="mr-2">←</span> Back to Home
    </Link>
   </div>
   <header className="relative w-full max-w-screen-2xl flex justify-center mb-10 mt-5">
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-shadow-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 tracking-widest z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
     ALL BLOGS
    </h1>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 -z-0"></div>
   </header>

   <section className="w-full max-w-screen-2xl flex-grow flex flex-col pt-2">
    <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto translate-y-1 border-[3px] border-slate-500"></aside>

    <motion.section
     variants={containerVars}
     initial="initial"
     whileInView="animate"
     viewport={{ once: true, amount: 0.01 }}
     className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-hidden"
    >
     {_blogs.map((item, index) => (
      <motion.article
       variants={childVars}
       key={index}
       className="aspect-portrait px-4 items-center flex flex-col cursor-pointer"
      >
       <article className="h-5 w-0 border-[3px] border-slate-500"></article>
       <article className="flex-1 w-full border border-slate-700/60 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-cyan-500/30">
        <article className="bg-gradient-to-br from-slate-800 to-slate-900 absolute -z-10 opacity-95 h-full w-full"></article>
        <aside className="text-white h-full w-full flex flex-col items-center justify-start">
         <section className="h-1/2 w-full relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-900 after:via-slate-900/20 after:to-transparent">
          <Image src={`/blogs/${item["image"]}`} width={500} height={300} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
          <h2 className="p-3 text-[0.90rem] 2xl:text-sm absolute bottom-0 w-full font-bold tracking-wide text-cyan-50 z-10">
           {item.name}
          </h2>
         </section>
         <section className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></section>
         <p className="flex-grow w-full px-4 py-2 text-[9px] text-slate-400">{item.sub}</p>
         <Link
          className="m-3 mb-4 text-[0.65rem] 2xl:text-xs font-semibold tracking-widest text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] text-center"
          href={`/blogs/${item.page}`}>
          READ MORE
         </Link>
        </aside>
       </article>
       <article className="h-5 w-0 border-[3px] border-slate-500"></article>
      </motion.article>
     ))}
    </motion.section>

    <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto -translate-y-1 border-[3px] border-slate-500"></aside>

   </section>
  </main>
 );
}