"use client"
import { useRef } from "react";
import { effect } from "@preact/signals-react";
import { isNavOpen } from "./nav-menu";

export default function NavBar() {
 const navBarRef = useRef<HTMLElement>(null);
 effect(() =>
  isNavOpen.value ? navBarRef.current?.classList.remove("-translate-x-full") : navBarRef.current?.classList.add("-translate-x-full")
 )

 return (
  <main
   className="fixed inset-0 bg-slate-700 opacity-45 z-50 text-white -translate-x-full duration-500 ease-out"
   ref={navBarRef}>

  </main>
 );
}