import Image from "next/image";
import { _achivements } from "@r22/data/achivements";
import { techs } from "@r22/data/technologies";

export default function Achivements() {

 let temp = [...techs];
 let newArray = [];

 let max = 23;

 for (let i = 1; i < max; i += 2) {
  if (i < max / 2) {
   newArray.push(temp.splice(0, i));
   continue;
  }
  newArray.push(temp.splice(0, (max - (i + 1))));
 }

 return (
  <main className="w-svw flex flex-col py-20 overflow-x-hidden">
   <header className="h-24 w-full flex flex-col items-center justify-center gap-1 translate-y-40 opacity-0 reveals">
    <h1 className="text-white text-5xl font-bold">Achivements</h1>
    <span className="block h-1 bg-white w-40 relative">
     <span className="block absolute h-4 w-4 rounded-full bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
    </span>
    <p className="text-gray-600 font-bold text-2xl">Some honorable mentions</p>
   </header>
   <section className="w-full h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-screen flex flex-grow items-center justify-center relative overflow-hidden">
    <section className="absolute flex flex-col gap-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
     {
      newArray.map((i, j) => (
       <section key={j} className="m-auto flex gap-1 justify-center">
        {i.map((x, y) => (
         <section
          key={y}
          className={`size-12 sm:size-20 md:size-26 lg:size-28 p-1 flex-shrink-0 flex-grow-0 bg-slate-800 rounded-xl ${(j) % 2 == 0 ? "translate-y-48" : "translate-x-48"} opacity-0 reveals`}>
          <aside className="h-full w-full flex items-center justify-center">
           <Image src={x.length !== 0 ? `/tech/${x}` : `/loading-circle.svg`} width={"60"} height={"60"} className={`${x.length === 0 ? "animate-spin" : "-rotate-45"}`} alt="Loading" />
          </aside>
         </section>
        ))}
       </section>
      ))
     }
    </section>
   </section>
  </main>
 );
}


{/* <aside className="absolute transition -rotate-45 sm:rotate-45 h-[800px] sm:h-[1200px] lg:h-[1600px] aspect-square grid gap-3 grid-cols-11">
{_fakeach.map((a, b) => (
 <article
  key={b}
  className={`hover:opacity-15 ${_actives.includes(b) ? (`bg-slate-800 opacity-0 reveals ${getPos(b)} sm:${getPos(b)}`) : "bg-slate-800 opacity-10"}`}>

 </article>
))}
</aside> */}