import Image from "next/image";

import heroImage from "@r22/assets/images/hero-bg.svg"

export default function Welcome() {
 return (
  <section className="h-svh w-svw flex p-5 lg:flex-row flex-col">
   <section className="lg:w-1/2 w-full lg:h-full h-2/3">
    <div className="h-full w-full sm:p-20 xl:p-40 flex items-center justify-center">
     <Image src={heroImage} alt="Hero image" className="h-full w-full object-contain" />
    </div>
   </section>
   <section className="lg:w-1/2 w-full lg:h-full h-1/3 flex flex-col items-center justify-center gap-5 p-5">
    <h2 className="text-white font-NeonderthawRegular text-shadow-sm shadow-blue-300 text-right">
     <span className="xxl:text-9xl md:text-7xl sm:text-5xl text-5xl">
      Providing <b className="text-sky-900">the best</b> project experience.
     </span>
    </h2>
    <p className="text-white sm:text-2xl text-lg text-right">I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.</p>
   </section>
  </section>
 );
}