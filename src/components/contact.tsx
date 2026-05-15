import Link from "next/link";

export default function Contact() {
 return (
  <section className="max-w-screen-2xl m-auto w-full p-5 sm:p-9 flex flex-col items-center justify-start overflow-x-hidden pt-20">
   <header className="w-full text-4xl text-shadow-sm font-bold text-white mb-12">
    <h2 className="translate-y-40 opacity-0 reveals text-center sm:text-left">
     CONTACT ME
    </h2>
   </header>
   
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
    {/* Left Side: Contact Form */}
    <div className="-translate-x-40 opacity-0 reveals w-full flex justify-center sm:justify-start">
     <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-5 w-full max-w-[40rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/60 p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col gap-2">
       <label htmlFor="name" className="text-xs font-semibold tracking-widest text-cyan-400/80 uppercase ml-1">Name</label>
       <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="h-14 rounded-xl outline-none px-4 bg-slate-950/50 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 shadow-inner"
       />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
       <label htmlFor="email" className="text-xs font-semibold tracking-widest text-cyan-400/80 uppercase ml-1">Email</label>
       <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="h-14 rounded-xl outline-none px-4 bg-slate-950/50 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 shadow-inner"
       />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
       <label htmlFor="message" className="text-xs font-semibold tracking-widest text-cyan-400/80 uppercase ml-1">Message</label>
       <textarea
        name="message"
        id="message"
        className="resize-none h-40 rounded-xl outline-none p-4 bg-slate-950/50 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 shadow-inner"
        placeholder="Write your message here..."
       ></textarea>
      </div>

      <button
       className="relative z-10 mt-4 h-14 rounded-xl outline-none font-bold tracking-widest text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-1 uppercase overflow-hidden group/btn"
      >
       <span className="relative z-10">Send Message</span>
       <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
      </button>
     </form>
    </div>

    {/* Right Side: Plain Div for Future */}
    <div className="translate-x-40 opacity-0 reveals w-full h-full min-h-[300px] border border-dashed border-slate-700 rounded-3xl flex items-center justify-center bg-slate-900/20 backdrop-blur-sm relative">
     <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent rounded-3xl"></div>
     <p className="text-slate-500 font-mono text-sm tracking-widest uppercase relative z-10">Reserved for Future Content</p>
    </div>
   </div>
  </section>
 );
}