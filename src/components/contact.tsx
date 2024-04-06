export default function Contact() {
 return (
  <menu className="w-full p-5 sm:p-9 text-white">
   <h2 className="font-bold text-2xl mb-4">CONTACT ME</h2>
   <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4 opacity-90">
    <input
     type="text"
     name="name"
     placeholder="name"
     className="h-10 rounded-md outline-none p-2 shadow-md shadow-white text-black"
    />
    <input
     type="email"
     name="email"
     placeholder="email"
     className="h-10 rounded-md outline-none p-2 shadow-md shadow-white text-black"
    />
    <textarea
     name="message"
     id="message"
     className="resize-none h-32 rounded-md outline-none p-2 shadow-md shadow-white text-black"
     placeholder="messgae"
    ></textarea>
    <button
     className="h-10 bg-white text-black rounded-md shadow-md shadow-white"
    >SEND</button>
   </form>
  </menu>
 );
}