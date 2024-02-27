"use client"

import Welcome from "@r22/components/welcome";
import About from "@r22/components/about";
import Technologies from "@r22/components/technologies";
import Portfolio from "@r22/components/portfolio";
import Skills from "@r22/components/skills";
import Contact from "@r22/components/contact";
import Footer from "@r22/components/footer";
import useTransition from "@r22/lib/aos";

export default function Home() {
  useTransition();
  return (
    <main className="min-h-svh w-full overflow-x-hiddens" id="page">
      <Welcome/>
      <About/>
      <Technologies />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
