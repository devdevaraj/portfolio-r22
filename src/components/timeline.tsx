import { useRef } from "react";
import { scrollTop, clientHeight } from "./scrollbar";
import { effect } from "@preact/signals-react";
import { Canvas, GroupProps } from "@react-three/fiber";
import TimelineScene from "./3d/timeline-scene";
import { Group } from "three";

export default function Timeline() {
 const ref = useRef<HTMLElement>(null);
 const innerRef = useRef<Group>(null);
 let scroll = 0;
 effect(() => {
  const info = ref.current?.getBoundingClientRect();
  const height = info?.height;
  const top = info?.top;
  const TS = scrollTop.value + top!;
  const OS = scrollTop.value - TS;
  const OH = height! - clientHeight.value;
  const TL = TS > scrollTop.value ? 0 : OS > OH ? OH : OS;
  scroll = TL / OH;
  console.log(scroll);
  if (innerRef.current) innerRef.current.position.set(0, 0, 500 * scroll);
 })
 return (
  <main
   ref={ref}
   className="h-[500vh] relative">
   <section
    className="sticky top-0 h-screen text-3xl transition duration-500">
    <Canvas camera={{ position: [0, 0, 50] }}>
     <TimelineScene
      innerRef={innerRef}
     // position={[0, 0, 500 * scroll]}
     />
    </Canvas>
   </section>
  </main>
 );
} 