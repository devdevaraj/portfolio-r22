export default function MainFocus() {
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
    <aside className="aspect-video flex-1 bg-yellow-600 -translate-x-full rotate-45 reveals p-2">MERN Stack</aside>
    <aside className="aspect-video flex-1 bg-yellow-600 translate-x-full -rotate-45 reveals p-2">Flutter</aside>
   </section>
  </main>
 );
}