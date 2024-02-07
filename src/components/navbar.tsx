export default function Navbar() {
 return (
  <section className="text-white fixed z-40 h-16 w-full">
   <div className="h-full w-full flex flex-row items-center justify-center bg-slate-400">
    <ul className="flex flex-col lg:flex-row lg:gap-10 gap-10 fixed top-full pt-10">
     <li>HOME</li>
     <li>ABOUT</li>
     <li>PROJECTS</li>
     <li>CONTACT</li>
    </ul>
   </div>
  </section>
 )
}