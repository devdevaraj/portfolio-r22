import Image from "next/image";
// import { _achivements } from "@r22/data/achivements";
import _technologies from "@r22/data/technologies.json";

export default function Technologies() {
 let temp = [..._technologies];
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
    <h1 className="text-white text-5xl font-bold">TECHNOLOGIES</h1>
    <span className="block h-1 bg-white w-40 relative">
     <span className="block absolute h-4 w-4 rounded-full bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
    </span>
    <p className="text-gray-600 font-bold text-2xl">Some technologies that i use</p>
   </header>
   <section className="w-full h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[110vh] flex flex-grow items-center justify-center relative overflow-hidden">
    <section className="absolute flex flex-col gap-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
     {
      newArray.map((i, j) => (
       <section key={j} className="m-auto flex gap-1 justify-center">
        {i.map((x, y) => (
         <section
          key={y}
          className={`size-12 sm:size-20 md:size-26 lg:size-28 flex items-center justify-center flex-shrink-0 flex-grow-0 hover:scale-150 hover:border-2 hover:z-30 bg-slate-600 rounded-xl ${(j) % 2 == 0 ? "translate-y-48" : "translate-x-48"} opacity-0 reveals`}>
          <aside className="h-2/3 w-2/3 flex items-center justify-center relative">
           <Image
            src={x.image.length !== 0 ? `/tech/${x.image}` : `/loading-circle.svg`}
            fill={true}
            className={`${x.image.length === 0 ? "animate-spin" : "-rotate-45"} drop-shadow-2xl shadow-black`}
            alt="Loading" />
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