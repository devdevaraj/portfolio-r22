import Image from "next/image";
import LightCanvas from "./common/light-canvas";
import GithubIcon from "./3d-loaders/github-icon";
import LinkedinIcon from "./3d-loaders/linkedin-icon";
import YoutubeIcon from "./3d-loaders/youtube-icon";
import { AboutTerminal } from "./about-terminal";
import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Rotator({ children, triggerId, axis }: { children: React.ReactNode, triggerId: number, axis: 'x' | 'y' | 'z' }) {
 const groupRef = useRef<THREE.Group>(null);
 const targetRotation = useRef([Math.PI / 2, 0, 0]);
 const lastTriggerId = useRef(triggerId);

 if (triggerId !== lastTriggerId.current) {
  lastTriggerId.current = triggerId;
  if (triggerId !== 0) {
   if (axis === 'x') targetRotation.current[0] += Math.PI * 2;
   if (axis === 'y') targetRotation.current[1] += Math.PI * 2;
   if (axis === 'z') targetRotation.current[2] += Math.PI * 2;
  }
 }

 useFrame((state, delta) => {
  if (!groupRef.current) return;
  groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotation.current[0], 4, delta);
  groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotation.current[1], 4, delta);
  groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotation.current[2], 4, delta);
 });

 return <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>{children}</group>
}

export default function About() {
 const [triggerEvent, setTriggerEvent] = useState({ id: 0, index: -1, axis: 'x' as 'x' | 'y' | 'z' });

 useEffect(() => {
  const interval = setInterval(() => {
   const axes = ['x', 'y', 'z'] as const;
   const randomAxis = axes[Math.floor(Math.random() * axes.length)];
   const randomIndex = Math.floor(Math.random() * 3);
   setTriggerEvent(prev => ({ id: prev.id + 1, index: randomIndex, axis: randomAxis }));
  }, 1000);
  return () => clearInterval(interval);
 }, []);

 return (
  <section className="max-w-screen-2xl m-auto h-svh w-full flex p-5 sm:p-0 pt-20 flex-row flex-wrap overflow-x-hidden" id="about">
   <aside className="text-white flex-grow basis-[512px]">
    <div className="h-full w-full flex items-center justify-center lg:p-0 xl:p-0 3xl:p-16 3 5xl:p-40">
     <div className="h-full aspect-square lg:aspect-[3/4] reveals -translate-x-40 opacity-0">
      <AboutTerminal />
     </div>
    </div>
   </aside>
   <article className="text-white flex-grow basis-[512px]">
    <div className="h-full w-full flex gap-5 flex-col items-center justify-center translate-x-40 opacity-0 reveals">
     <div className="relative">
      <h1 className="text-8xl font-bold text-gray-600 opacity-60">ABOUT</h1>
      <h2 className="absolute m-auto text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">MY SELF</h2>
     </div>
     <h2 className="text-3xl font-bold">Hi! This is Devaraj.</h2>
     <p className="text-xl text-center">I’m curious about how things work—code, systems, or anything. I don’t know everything, but I can figure things out, even when it seems impossible..</p>
     <a href="/me/Devaraj P V.pdf" target="_blank" className="text-blue-700">Checkout my resume</a>
     <div className="flex gap-5">
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <Rotator triggerId={triggerEvent.index === 0 ? triggerEvent.id : 0} axis={triggerEvent.axis}>
        <GithubIcon onClick={() => window.open("https://github.com/devdevaraj")} position={[0, 0, 0]} />
       </Rotator>
      </LightCanvas>
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <Rotator triggerId={triggerEvent.index === 1 ? triggerEvent.id : 0} axis={triggerEvent.axis}>
        <LinkedinIcon onClick={() => window.open("https://www.linkedin.com/in/devdevaraj")} />
       </Rotator>
      </LightCanvas>
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <Rotator triggerId={triggerEvent.index === 2 ? triggerEvent.id : 0} axis={triggerEvent.axis}>
        <YoutubeIcon onClick={() => window.open("https://youtube.com/@bittobolt?si=MPpA3qyALQilkC7V")} position={[0, 0, 0]} />
       </Rotator>
      </LightCanvas>
     </div>
    </div>
   </article>
  </section >
 );
}