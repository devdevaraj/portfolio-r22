export default function MainFocus() {
 let mainFocus = [
  {
   name: "Application Development",
   des: ["React, Next.js", "Node.js, Express", "REST APIs, WebSockets", "UI/UX, State Management", "Electron", "Flutter (mobile)"],
   translate: "-translate-x-full",
   rotate: "rotate-45"
  },
  {
   name: "Systems & Infrastructure",
   des: ["Docker, Firecracker (microVMs)", "Linux, Networking", "ZFS, Storage systems", "Redis, MongoDB, PostgreSQL", "CI / CD, Deployment", "Nginx"],
   translate: "translate-x-full",
   rotate: "-rotate-45"
  },
 ];
 return (
  <main className="max-w-screen-2xl m-auto w-full flex flex-col items-center justify-start overflow-x-hidden">
   <header className="text-4xl text-shadow-sm font-bold text-white">
    <h2 className="translate-x-10 opacity-0 reveals inline-block">M</h2>
    <h2 className="translate-x-20 opacity-0 reveals inline-block">A</h2>
    <h2 className="translate-x-32 opacity-0 reveals inline-block">I</h2>
    <h2 className="translate-x-40 opacity-0 reveals inline-block">N</h2>
    <h2 className="w-4 inline-block"></h2>
    <h2 className="translate-x-52 opacity-0 reveals inline-block">F</h2>
    <h2 className="translate-x-60 opacity-0 reveals inline-block">O</h2>
    <h2 className="translate-x-72 opacity-0 reveals inline-block">C</h2>
    <h2 className="translate-x-80 opacity-0 reveals inline-block">U</h2>
    <h2 className="translate-x-96 opacity-0 reveals inline-block">S</h2>
   </header>
   <section className="text-white w-full flex flex-col lg:flex-row p-10 gap-10 overflow-hidden">
    {mainFocus.map((e, i) => (
     <aside key={i} className={`aspect-video flex flex-col justify-center flex-1 ${e.translate} ${e.rotate} reveals p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 border-t-white/20 border-l-white/20 shadow-[10px_10px_30px_rgba(0,0,0,0.5),inset_1px_1px_0px_rgba(255,255,255,0.2)]`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">{e.name}</h2>
      <div className="flex w-full justify-center">
       <ul className="text-lg md:text-xl flex flex-col gap-3 text-left text-slate-200 list-none pl-0">
        {e.des?.length ? e.des.map((d, j) => (
         <li key={j} className="font-medium tracking-wide drop-shadow-sm flex items-center gap-4">
          <span className="min-w-2 min-h-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"></span>
          <span>{d}</span>
         </li>
        )) : null}
       </ul>
      </div>
     </aside>
    ))}
   </section>
  </main>
 );
}