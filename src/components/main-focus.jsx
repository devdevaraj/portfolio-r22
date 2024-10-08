export default function MainFocus() {
 let mainFocus = [
  { name: "MERN Stack", translate: "-translate-x-full", rotate: "rotate-45" },
  { name: "Flutter", translate: "translate-x-full", rotate: "-rotate-45" },
 ];
 return (
  <main className="w-svw flex flex-col items-center justify-start overflow-x-hidden">
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
     <aside key={i} className={`aspect-video flex-1 shadow-sm shadow-white rounded-lg ${e.translate} ${e.rotate} reveals p-2`}>
      <h2 className="text-2xl font-bold text-center">{e.name}</h2>
     </aside>
    ))}
   </section>
  </main>
 );
}