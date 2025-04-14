"use client"

import Welcome from "@r22/components/welcome";
import About from "@r22/components/about";
import MainFocus from "@r22/components/main-focus";
import Technologies from "@r22/components/technologies";
import Timeline from "@r22/components/timeline";
import Portfolio from "@r22/components/portfolio";
import Blogs from "@r22/components/blogs";
import Contact from "@r22/components/contact";
import Footer from "@r22/components/footer";
import useTransition from "@r22/lib/aos";
import ComingSoon from "@r22/components/coming-soon";
import Intrests from "@r22/components/intrests";

export default function Home() {
  useTransition();
  return (
    <main className="min-h-svh w-full" id="page">
      {/* <ComingSoon/> */}
      <Welcome />
      <About />
      <MainFocus />
      <Technologies />
      <Timeline />
      <Blogs />
      <Portfolio />
      <Intrests />
      <Contact />
      <Footer />
    </main>
  );
}
