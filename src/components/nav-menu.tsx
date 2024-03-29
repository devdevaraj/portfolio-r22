"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group } from "three";
import { signal } from "@preact/signals-react";

import MenuIcon from "./3d-loaders/menu-icon";

export const isNavOpen = signal<boolean>(false);

export default function NavMenu() {
 return (
  <main className="text-white fixed z-50 h-32 lg:h-40 w-fit top-0">
   <section className="h-full w-32 lg:w-40 relative">
    <aside
     className="h-20 w-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-40"
     onClick={async () => {isNavOpen.value = !isNavOpen.value}}
    >
    </aside>
    <Canvas camera={{ position: [0, 0, 60] }}>
     <Suspense fallback={null}>
      <pointLight position={[0,0,10]} intensity={6} />
      <ambientLight intensity={1}/>
      <MenuIconContainer />
     </Suspense>
    </Canvas>
   </section>
  </main>
 )
}

function MenuIconContainer() {
 const ref = useRef<Group>(null);
 useFrame((_state, delta) => {
  if (ref.current) {
   ref.current.rotation.x -= delta / 5;
   ref.current.rotation.y -= delta / 10;
  }
 });
 return <MenuIcon scale={0.5} innerRef={ref} />
}