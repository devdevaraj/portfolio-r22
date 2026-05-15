import _projects from "@r22/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const project = _projects.find((p) => p.page === slug);

 if (!project) {
  notFound();
 }

 const mainImage = project.assets_path && project.images && project.images.length > 0
  ? `${project.assets_path}/${project.images[0]}`
  : project.assets_path && project.thumbnail ? `${project.assets_path}/${project.thumbnail}` : '';

 return (
  <main className="min-h-screen bg-transparent text-slate-200 py-12 px-4 sm:px-8 lg:px-16">
   <div className="max-w-6xl mx-auto">
    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-10 font-medium">
     <span className="mr-2">←</span> Back to Portfolio
    </Link>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
     {/* Left Column: Image Gallery */}
     <div className="lg:col-span-7 space-y-6">
      <div className="w-full aspect-video relative rounded-3xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900/50 backdrop-blur-sm group">
       {mainImage ? (
        <Image
         src={`${project.assets_path}/${project.thumbnail}`}
         alt={project.name}
         fill
         className="object-cover transition-transform duration-700 group-hover:scale-105"
         priority
        />
       ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-gradient-to-br from-slate-900 to-slate-950">
         <span className="font-mono text-sm tracking-widest uppercase mb-2">Project Preview</span>
         <span className="text-xs opacity-50">Images coming soon</span>
        </div>
       )}
       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent pointer-events-none"></div>
      </div>

      {project.assets_path && project.images && project.images.length > 1 && (
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {project.images.map((img, idx) => (
         <div key={idx} className="aspect-video relative rounded-xl overflow-hidden border border-slate-800 opacity-80 hover:opacity-100 transition-opacity cursor-pointer shadow-lg bg-slate-900">
          <Image src={`${project.assets_path}/${img}`} fill className="object-cover" alt={`${project.name} screenshot ${idx + 2}`} />
         </div>
        ))}
       </div>
      )}
     </div>

     {/* Right Column: Project Details */}
     <div className="lg:col-span-5 flex flex-col justify-start">
      <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-bold tracking-widest mb-6 backdrop-blur-md uppercase self-start">
       Project Showcase
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 mb-6">
       {project.name}
      </h1>

      <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
       {project.descriptions || "This project explores advanced concepts in web development, showcasing a robust architecture and sleek user interface. Further details, documentation, and specific challenges overcome during development will be added soon."}
      </p>

      {project.tnt && project.tnt.length > 0 && (
       <div className="mb-12">
        <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">Technologies & Tools</h3>
        <div className="flex flex-wrap gap-2">
         {project.tnt.map((tech, idx) => (
          <span key={idx} className="px-4 py-1.5 bg-slate-800/60 border border-slate-700 text-cyan-50 rounded-lg text-sm shadow-sm backdrop-blur-md">
           {tech}
          </span>
         ))}
        </div>
       </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
       <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-6 rounded-full font-semibold tracking-wide text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-1">
        Live Website
       </a>
       <a href={project.source_url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-6 rounded-full font-semibold tracking-wide text-cyan-400 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        Source Code
       </a>
      </div>
     </div>
    </div>
   </div>
  </main>
 );
}