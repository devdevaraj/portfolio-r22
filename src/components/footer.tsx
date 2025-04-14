
import { Canvas } from "@react-three/fiber";
import FooterScene from "./3d/footer-scene";
import { useRef } from "react";

export default function Footer() {
 const ref = useRef<HTMLElement>(null!);
 return (
  <footer ref={ref} className="relative w-full h-screen px-5 py-2 sm:px-9 sm:py-4 bg-gradient-to-t to-transparent">
   <main className="w-full h-full flex flex-col items-center justify-end from-black">
    <section className="w-full h-px bg-slate-400"></section>
    <section className="text-white text-xs font-light pt-4">
     Powered by Dvaraj P V  |  Copyright @ {(new Date()).getFullYear()} devaraj.me
    </section>
   </main>
   <main className="absolute inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 500] }}>
     <FooterScene mainRef={ref}/>
    </Canvas>
   </main>
  </footer>
 );
}