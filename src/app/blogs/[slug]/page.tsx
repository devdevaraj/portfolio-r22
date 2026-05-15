import _blogs from "@r22/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Blog({
 params,
}: {
 params: Promise<{ slug: string }>
}) {
 const { slug } = await params;
 const blog = _blogs.find((b) => b.page === slug);

 if (!blog) {
  notFound();
 }

 return (
  <main className="min-h-screen bg-transparent text-slate-200 py-12 px-4 sm:px-8 lg:px-16">
   <div className="max-w-4xl mx-auto">
    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 font-medium">
     <span className="mr-2">←</span> Back to Portfolio
    </Link>

    <article className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
     <div className="w-full h-[35vh] sm:h-[45vh] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
      <Image
       src={`/blogs/${blog.image}`}
       alt={blog.name}
       fill
       className="object-cover"
       priority
      />
     </div>

     <div className="p-6 sm:p-10 lg:p-14 relative z-20 -mt-16">
      <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-bold tracking-widest mb-6 backdrop-blur-md uppercase">
       Article
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 mb-8 leading-tight">
       {blog.name}
      </h1>

      <div className="text-lg text-slate-300 space-y-6 leading-relaxed font-light">
       <p className="whitespace-pre-wrap">{blog.content}</p>
      </div>
     </div>
    </article>
   </div>
  </main>
 );
}