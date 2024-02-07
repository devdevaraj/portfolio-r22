"use client"
import { useEffect, useRef } from "react";

export default function Scrollbar() {
 const scrollbarRef = useRef(null);

 useEffect(() => {
  document.querySelector("body")!.addEventListener("scroll", e => {
   let scrollTop = (e.target as HTMLDivElement).scrollTop;
   let scrollHeight = (e.target as HTMLDivElement).scrollHeight;
   let clientHeight = (e.target as HTMLDivElement).clientHeight;
   let scroll = scrollTop / (scrollHeight - clientHeight);
   (scrollbarRef.current! as HTMLDivElement).style.width = String(scroll*100) + "%";
  })
 });
 
 return (
  <main className="w-full h-1 flex justify-center bg-blue-950 text-white fixed z-50 top-0">
   <div className="w-0 h-full bg-blue-500" ref={scrollbarRef}>
   </div>
  </main>
 );
}