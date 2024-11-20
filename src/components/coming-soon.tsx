import Lottie from "./animations/lottie";


export default function ComingSoon() {
 return(
  <main className="flex md:flex-row flex-col items-center justify-center h-svh w-full">
   <Lottie url="/animations/anim-1.json" width="250px" height="250px" />
   <h1 className="text-white text-center md:text-9xl sm:text-6xl text-5xl font-EduRegular font-bold">Under development...</h1>
  </main>
 );
}