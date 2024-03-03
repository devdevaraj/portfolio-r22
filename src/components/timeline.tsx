import { useRef } from "react";
import { scrollTop, clientHeight } from "./scrollbar";
import { effect } from "@preact/signals-react";

export default function Timeline() {
 const ref = useRef<HTMLElement>(null);
 const innerRef = useRef<HTMLElement>(null);
 effect(() => {
  const info = ref.current?.getBoundingClientRect();
  const height = info?.height;
  const top = info?.top;
  const TS = scrollTop.value + top!;
  const OS = scrollTop.value - TS;
  const OH = height! - clientHeight.value;
  const TL = TS > scrollTop.value ? 0 : OS > OH ? OH : OS;
  const scroll = TL / OH;
  if (innerRef.current) innerRef.current.style.width = (scroll * 100 + "%");
 })
 return (
  <main
   ref={ref}
   className="h-[200vh] relative">
   <section
    ref={innerRef}
    className="sticky top-0 h-screen bg-slate-400 text-3xl transition duration-500">
    timeline
   </section>
  </main>
 );
} 