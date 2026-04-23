import Image from "next/image";

import heroImage from "@r22/assets/images/hero-bg.svg"
import LightCanvas from "./common/light-canvas";
import IntroModel from "./3d-loaders/intro-model";

export default function Welcome() {
 return (
  <section className="max-w-screen-2xl m-auto h-svh w-full flex p-5 lg:flex-row flex-col">
   <section className="lg:w-1/2 w-full lg:h-full h-2/3">
    <div className="h-full w-full sm:p-0 xl:p-0 flex items-center justify-center">
     <LightCanvas
      canvas={{ camera: { position: [0, 0, 1.1] }, children: <></> }}
      point={{ position: [-3, 1, 2], intensity: 30 }}
      ambient={{ intensity: 0.6 }}
     >
      <IntroModel rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
     </LightCanvas>
    </div>
   </section>
   <section className="lg:w-1/2 w-full lg:h-full h-1/3 flex flex-col items-center justify-center gap-5 p-5">
    <h2 className="text-white font text-shadow-sm shadow-blue-300 text-right">
     <span className="xxl:text-9xl md:text-7xl sm:text-5xl text-5xl">
      Providing <b className="text-sky-900">the best</b> project experience.
     </span>
    </h2>
    <p className="text-white sm:text-2xl text-lg text-right">
     I’m a full-stack and systems-oriented developer focused on building scalable web applications and cloud-based platforms. I work across the stack—from crafting responsive frontend interfaces to designing backend systems, real-time services, and isolated execution environments using containers and microVMs.
    </p>
    <p className="text-white sm:text-2xl text-lg text-right">
     I enjoy solving complex engineering problems, especially in areas like infrastructure, performance, and system design.
    </p>
   </section>
  </section>
 );
}