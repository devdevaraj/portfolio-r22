"use client"
import { signal } from "@preact/signals-react";
import { useEffect, useRef } from "react";

export const scrollTop = signal<number>(0);
export const clientHeight = signal<number>(0);

export default function Scrollbar() {
 const scrollbarRef = useRef(null);

 useEffect(() => {
  const scrollHandler = (e: Event) => {
   let _scrollTop = (e.target as HTMLDivElement).scrollTop;
   let _scrollHeight = (e.target as HTMLDivElement).scrollHeight;
   let _clientHeight = (e.target as HTMLDivElement).clientHeight;
   let scroll = _scrollTop / (_scrollHeight - _clientHeight);
   (scrollbarRef.current! as HTMLDivElement).style.width = String(scroll * 100) + "%";

   scrollTop.value = _scrollTop;
   clientHeight.value = _clientHeight;
  }

  const body = document.querySelector("body")!
  body.addEventListener("scroll", scrollHandler);
  return () =>  body.removeEventListener("scroll", scrollHandler);
 });

 return (
  <main className="w-full h-1 flex justify-center bg-blue-950 text-white fixed z-50 top-0">
   <div className="w-0 h-full bg-blue-500" ref={scrollbarRef}>
   </div>
  </main>
 );
}