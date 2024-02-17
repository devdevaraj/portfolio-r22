import { FaSquareGithub, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import GithubIcon from "./3d-loaders/github-icon";
import LinkedinIcon from "./3d-loaders/linkedin-icon";
import YoutubeIcon from "./3d-loaders/youtube-icon";

export default function About() {
 return (
  <section className="h-svh w-svw flex p-5 pt-20 flex-row flex-wrap" id="about">
   <aside className="text-white flex-grow basis-[512px]">
    <div className="h-full w-full flex items-center justify-center lg:p-40">
     <div className="h-full aspect-[3/4] bg-white reveals -translate-x-40 opacity-0"></div>
    </div>
   </aside>
   <article className="text-white flex-grow basis-[512px]">
    <div className="h-full w-full flex gap-5 flex-col items-center justify-center translate-x-40 opacity-0 reveals">
     <div className="relative">
      <h1 className="text-8xl font-bold text-gray-600 opacity-60">ABOUT</h1>
      <h2 className="absolute m-auto text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">MY SELF</h2>
     </div>
     <h2 className="text-3xl font-bold">Hi! This is Devaraj.</h2>
     <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <a href="#" className="text-blue-700">Checkout my resume</a>
     <div className="flex gap-5 w-full">
      <Canvas camera={{ position: [0, 0, 2] }}>
       <Suspense fallback={null}>
        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
         maxAzimuthAngle={Math.PI / 2}
        />
        <pointLight intensity={8} position={[8,6,0]} />
        <ambientLight intensity={4} />
        <GithubIcon rotation={[1.54, 0, 0]} position={[-2,0,0]} />
        <LinkedinIcon rotation={[1.54,0,0]} />
        <YoutubeIcon rotation={[1.54,0,0]} position={[2,0,0]} />
       </Suspense>
      </Canvas>
     </div>
    </div>
   </article>
  </section>
 );
}