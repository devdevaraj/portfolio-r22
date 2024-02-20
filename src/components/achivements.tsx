export default function Achivements() {
 const _achivements = (new Array(16)).fill({ name: "ACH - 1" });
 const _fakeach = (new Array(121)).fill("fake");
 const _actives = [28, 38, 40, 48, 49, 50, 52, 58, 59, 60, 61, 62, 68, 70, 71, 72, 80, 82, 92];
 const getPos = (num: number) => _actives.findIndex(i => i === num) % 2 === 0 ? "translate-y-40" : "translate-x-40";
 return (
  <main className="h-svh w-svw flex flex-col py-20 overflow-x-hidden">
   <header className="h-24 w-full flex flex-col items-center justify-center gap-1 translate-y-40 opacity-0 reveals">
    <h1 className="text-white text-5xl font-bold">Achivements</h1>
    <span className="block h-1 bg-white w-40 relative">
     <span className="block absolute h-4 w-4 rounded-full bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
    </span>
    <p className="text-gray-600 font-bold text-2xl">Some honorable mentions</p>
   </header>
   <section className="">
   </section>
   <section className="w-full flex flex-grow items-center justify-center relative overflow-hidden">
    <aside className="absolute transition -rotate-45 sm:rotate-45 h-[800px] sm:h-[1200px] lg:h-[1600px] aspect-square grid gap-3 grid-cols-11">
     {_fakeach.map((a, b) => (
      <article
       key={b}
       className={`hover:opacity-15 ${_actives.includes(b) ? (`bg-slate-800 opacity-0 reveals ${getPos(b)} sm:${getPos(b)}`) : "bg-slate-800 opacity-10"}`}>

      </article>
     ))}
    </aside>
   </section>
  </main>
 );
}