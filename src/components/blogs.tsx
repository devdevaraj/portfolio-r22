"use client"

import _blogs from "@r22/data/blogs.json";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const breakpoints: { [key: string]: number } = {
    es: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6
  }
  const getVisible = (int: number) => Object.entries(breakpoints).map((i, j) => {
    let bp = i[0];
    let value = breakpoints[bp];
    return `${bp == "es" ? "" : bp + ":"}${(int >= value * 3) ? "hidden" : "flex"}`;
  }).filter(i => i.split(":")[1] !== "");

  const getDelay = (int: number) => Object.entries(breakpoints).map((i, j) => {
    let bp = i[0] === "es" ? "" : `${i[0]}:`;
    let value = breakpoints[i[0]];
    return `${bp}delay-[${100 * (int % value)}ms]`;
  })

  return (
    <section className="max-w-screen-2xl m-auto min-h-svh min-w-svh flex flex-col items-center justify-start p-1 sm:p-5 overflow-x-hidden">
      <header className="text-4xl text-shadow-sm font-bold text-white">
        <h1>BLOGS</h1>
      </header>
      <section className="flex-grow w-full pt-2">
        <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto translate-y-1 border-[3px] border-slate-500"></aside>
        <section className="w-full h-full grid grid-rows-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-hidden">
          {_blogs.map((item, index) => (
            <article
              key={index}
              className={`aspect-portrait px-4 items-center flex flex-col reveals translate-y-full opacity-0 ${getVisible(index).join(" ")} ${getDelay(index).join(" ")}`}>
              <article className="h-5 w-0 border-[3px] border-slate-500"></article>
              <article className="flex-1 w-full border border-slate-700/60 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-cyan-500/30">
                <article className="bg-gradient-to-br from-slate-800 to-slate-900 absolute -z-10 opacity-95 h-full w-full"></article>
                <aside className="text-white h-full w-full flex flex-col items-center justify-start">
                  <section className="h-1/2 w-full relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-900 after:via-slate-900/20 after:to-transparent">
                    <Image src={`/blogs/${item["image"]}`} width={500} height={300} alt="Skill image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                    <h2 className="p-3 text-[0.90rem] 2xl:text-sm absolute bottom-0 w-full font-bold tracking-wide text-cyan-50 z-10">
                      {item.name}
                    </h2>
                  </section>
                  <section className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></section>
                  <p className="flex-grow w-full px-4 py-2 text-[9px] text-slate-400">{item.sub}</p>
                  <Link
                    className="m-3 mb-4 text-[0.65rem] 2xl:text-xs font-semibold tracking-widest text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    href={`/blogs/${item.page}`}>
                    READ MORE
                  </Link>
                </aside>
              </article>
              <article className="h-5 w-0 border-[3px] border-slate-500"></article>
            </article>
          ))}
        </section>
        <aside className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 m-auto -translate-y-1 border-[3px] border-slate-500"></aside>
        <aside className="text-center text-white cursor-pointer">
          <Link href={"/blogs"}>
            Wnna see more?
          </Link>
        </aside>
      </section>
    </section>
  );
}