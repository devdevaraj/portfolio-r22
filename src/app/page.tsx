"use client"

import Welcome from "@r22/components/welcome";
import About from "@r22/components/about";
import Achivements from "@r22/components/achivements";
import Portfolio from "@r22/components/portfolio";
import Skills from "@r22/components/skills";
import useTransition from "@r22/lib/aos";

export default function Home() {
  useTransition();
  return (
    <main className="min-h-svh w-full" id="page">
      <Welcome/>
      <About/>
      <Achivements />
      <Skills />
      <Portfolio />
    </main>
  );
}
