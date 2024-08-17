import Image from "next/image";
import LightCanvas from "./common/light-canvas";
import GithubIcon from "./3d-loaders/github-icon";
import LinkedinIcon from "./3d-loaders/linkedin-icon";
import YoutubeIcon from "./3d-loaders/youtube-icon";

export default function About() {
 return (
  <section className="h-svh w-svw flex p-5 pt-20 flex-row flex-wrap overflow-x-hidden" id="about">
   <aside className="text-white flex-grow basis-[512px]">
    <div className="h-full w-full flex items-center justify-center lg:p-40">
     <div className="h-full aspect-[3/4] bg-white reveals -translate-x-40 opacity-0">
     <Image src={"/me/profile.jpg"} alt="profile" fill={true} className="object-cover"/>
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
     <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <a href="#" className="text-blue-700">Checkout my resume</a>
     <div className="flex gap-5">
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <GithubIcon rotation={[1.54, 0, 0]} position={[0, 0, 0]} />
      </LightCanvas>
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <LinkedinIcon rotation={[1.54, 0, 0]} />
      </LightCanvas>
      <LightCanvas
       canvas={{ camera: { position: [0, 0, 2] }, children: <></> }}
       point={{ intensity: 8, position: [8, 6, 0] }}
       ambient={{ intensity: 4 }}
       style={{ width: 100 }}
       orbitControls={true}
      >
       <YoutubeIcon rotation={[1.54, 0, 0]} position={[0, 0, 0]} />
      </LightCanvas>
     </div>
    </div>
   </article>
  </section >
 );
}