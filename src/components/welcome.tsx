import Image from "next/image";

import heroImage from "@r22/assets/images/hero-bg.svg"
import LightCanvas from "./common/light-canvas";
import IntroModel from "./3d-loaders/intro-model";

export default function Welcome() {
 return (
  <section className="h-svh w-svw flex p-5 lg:flex-row flex-col">
   <section className="lg:w-1/2 w-full lg:h-full h-2/3">
    <div className="h-full w-full sm:p-10 xl:p-20 flex items-center justify-center">
     <LightCanvas
      canvas={{ camera: { position: [0, 0, 1] }, children: <></> }}
      point={{ position: [0, 0, 0], intensity: 4 }}
      ambient={{ intensity: 1 }}
     >
      <IntroModel rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
     </LightCanvas>
    </div>
   </section>
   <section className="lg:w-1/2 w-full lg:h-full h-1/3 flex flex-col items-center justify-center gap-5 p-5">
    <h2 className="text-white font-EduRegular text-shadow-sm shadow-blue-300 text-right">
     <span className="xxl:text-9xl md:text-7xl sm:text-5xl text-5xl">
      Providing <b className="text-sky-900">the best</b> project experience.
     </span>
    </h2>
    <p className="text-white sm:text-2xl text-lg text-right">I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.</p>
   </section>
  </section>
 );
}