export default function Contact() {
 return (
  <menu className="w-full p-5 sm:p-9 text-white">
   <h2 className="font-bold text-2xl mb-4">CONTACT ME</h2>
   <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4 opacity-90 max-w-[40rem]">
    <input
     type="text"
     name="name"
     placeholder="name"
     className="h-10 rounded-md outline-none p-2 shadow-md placeholder:text-white bg-gray-600 shadow-white text-white autofill:text-white autofill:shadow-[inset_0_0_1000px_0px_rgb(75,85,99),0_4px_6px_-1px_rgb(255,255,255)]"
    />
    <input
     type="email"
     name="email"
     placeholder="email"
     className="h-10 rounded-md outline-none p-2 shadow-md placeholder:text-white bg-gray-600 shadow-white text-white"
    />
    <textarea
     name="message"
     id="message"
     className="resize-none h-32 rounded-md outline-none p-2 shadow-md placeholder:text-white bg-gray-600 shadow-white text-white"
     placeholder="messgae"
    ></textarea>
    <button
     className="h-10 rounded-md outline-none shadow-md text-white bg-gray-600 shadow-white"
    >SEND</button>
   </form>
  </menu>
 );
}