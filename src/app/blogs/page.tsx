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
  <main className="min-h-svh w-full bg-slate-950 text-white flex flex-col items-center pt-10 pb-12 px-2 sm:px-5 overflow-x-hidden">
   <header className="relative w-full max-w-screen-2xl flex justify-center mb-10 mt-5">
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-shadow-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 tracking-widest z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
     ALL BLOGS
    </h1>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 -z-0"></div>
   </header>

   <section className="w-full max-w-screen-2xl flex-grow flex flex-col">
    <aside className="w-[98%] m-auto border-t-2 border-slate-700 mb-8 relative before:absolute before:w-2 before:h-2 before:bg-cyan-400 before:-top-1 before:-left-1 after:absolute after:w-2 after:h-2 after:bg-purple-600 after:-top-1 after:-right-1 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></aside>

    <motion.section
     variants={containerVars}
     initial="initial"
     whileInView="animate"
     viewport={{ once: true, amount: 0.01 }}
     className="w-full flex-grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-2 overflow-hidden py-4 px-2"
    >
     {_blogs.map((item, index) => (
      <motion.article
       variants={childVars}
       key={index}
       className="aspect-portrait px-2 sm:px-4 items-center flex flex-col group cursor-pointer"
      >
       <article className="h-5 w-0 border-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_5px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]"></article>
       <article className="flex-1 w-full border-4 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300 rounded-sm relative overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-0"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent z-0"></div>

        <aside className="text-white h-full w-full flex flex-col items-center justify-start z-10 relative">
         <section className="h-1/2 w-full bg-slate-800 relative overflow-hidden border-b-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300">
          <Image
           src={`/skills/${item.image}`}
           width={500}
           height={300}
           alt={item.name}
           className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out"
           loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          <h2 className="px-2 sm:px-3 pb-2 pt-4 text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.9rem] font-medium absolute bottom-0 left-0 text-shadow-md w-full leading-tight text-white group-hover:text-cyan-300 transition-colors duration-300 bg-gradient-to-t from-slate-900/80 to-transparent z-10">
           {item.name}
          </h2>
         </section>
         <section className="w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></section>

         <div className="flex-grow flex flex-col items-center justify-center p-2 text-center relative w-full h-full">
          {/* Decorative grid background inside */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px] group-hover:bg-[linear-gradient(to_right,#0ea5e922_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e922_1px,transparent_1px)] transition-all duration-500"></div>

          <p className="text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] text-slate-400/80 line-clamp-3 group-hover:text-slate-200 relative z-10 px-1 font-light tracking-wide">
           Read more about insights, technical explorations, and stories from my building journey.
          </p>
         </div>

         <button className="my-3 mx-2 text-[0.6rem] sm:text-[0.65rem] md:text-xs bg-slate-950 border border-slate-600 group-hover:border-cyan-300 px-3 sm:px-5 py-1.5 sm:py-2 rounded-sm shadow-sm group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:bg-cyan-950/40 text-slate-400 group-hover:text-cyan-100 transition-all duration-300 tracking-[0.15em] uppercase z-10 backdrop-blur-sm relative overflow-hidden group/btn">
          <span className="relative z-10">READ MORE</span>
          <div className="absolute inset-0 bg-cyan-400/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
         </button>
        </aside>
       </article>
       <article className="h-5 w-0 border-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_5px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]"></article>
      </motion.article>
     ))}
    </motion.section>

    <aside className="w-[98%] m-auto border-t-2 border-slate-700 mt-8 relative before:absolute before:w-2 before:h-2 before:bg-blue-600 before:-top-1 before:-left-1 after:absolute after:w-2 after:h-2 after:bg-cyan-400 after:-top-1 after:-right-1 shadow-[0_0_15px_rgba(34,211,238,0.2)]"></aside>

    <div className="flex justify-center mt-12 mb-8">
     <Link href="/">
      <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-slate-900 text-slate-400 border border-slate-700 rounded-sm hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-slate-800 transition-all duration-300 text-xs sm:text-sm tracking-[0.2em] font-medium flex items-center gap-2 group relative overflow-hidden">
       <span className="group-hover:-translate-x-1 transition-transform duration-300 text-lg sm:text-xl relative z-10">←</span>
       <span className="relative z-10">RETURN TO HOME</span>
       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>
     </Link>
    </div>
   </section>
  </main>
 );
}