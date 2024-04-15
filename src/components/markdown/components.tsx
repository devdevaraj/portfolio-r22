import NoSsr from "@r22/providers/no-ssr";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Fragment, ReactNode, useRef } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";


export const H1 = ({ children }: { children: ReactNode }) => <h1 className="text-4xl font-bold font-sans my-3">{children}</h1>;
export const H2 = ({ children }: { children: ReactNode }) => <h2 className="text-2xl font-bold font-sans my-2">{children}</h2>;
export const H3 = ({ children }: { children: ReactNode }) => <h3 className="text-lg font-bold font-sans my-1">{children}</h3>;
export const CODE = ({ children }: { children: string }) => {
 const copyRef = useRef<SVGSVGElement>(null);
 const tickRef = useRef<SVGSVGElement>(null);
 const copyToClipboard = () => {
  (copyRef.current as SVGSVGElement).style.display = "none";
  (tickRef.current as SVGSVGElement).style.display = "block";
  navigator.clipboard.writeText(children);
  setTimeout(() => {
   (copyRef.current as SVGSVGElement).style.display = "block";
   (tickRef.current as SVGSVGElement).style.display = "none";
  },4000);
 }
 return(
 <main className="bg-[#47556999] rounded-md h-fit w-fit p-2 pb-3 flex items-start">
  <section className="my-2">
   <code className="font-mono whitespace-pre">{children}</code>
  </section>
  <section className="w-10 ps-1">
   <svg
   ref={copyRef}
    onClick={copyToClipboard}
    className="w-full" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M48.186 92.137c0-8.392 6.49-14.89 16.264-14.89s29.827-.225 29.827-.225-.306-6.99-.306-15.88c0-8.888 7.954-14.96 17.49-14.96 9.538 0 56.786.401 61.422.401 4.636 0 8.397 1.719 13.594 5.67 5.196 3.953 13.052 10.56 16.942 14.962 3.89 4.402 5.532 6.972 5.532 10.604 0 3.633 0 76.856-.06 85.34-.059 8.485-7.877 14.757-17.134 14.881-9.257.124-29.135.124-29.135.124s.466 6.275.466 15.15-8.106 15.811-17.317 16.056c-9.21.245-71.944-.49-80.884-.245-8.94.245-16.975-6.794-16.975-15.422s.274-93.175.274-101.566zm16.734 3.946l-1.152 92.853a3.96 3.96 0 0 0 3.958 4.012l73.913.22a3.865 3.865 0 0 0 3.91-3.978l-.218-8.892a1.988 1.988 0 0 0-2.046-1.953s-21.866.64-31.767.293c-9.902-.348-16.672-6.807-16.675-15.516-.003-8.709.003-69.142.003-69.142a1.989 1.989 0 0 0-2.007-1.993l-23.871.082a4.077 4.077 0 0 0-4.048 4.014zm106.508-35.258c-1.666-1.45-3.016-.84-3.016 1.372v17.255c0 1.106.894 2.007 1.997 2.013l20.868.101c2.204.011 2.641-1.156.976-2.606l-20.825-18.135zm-57.606.847a2.002 2.002 0 0 0-2.02 1.988l-.626 96.291a2.968 2.968 0 0 0 2.978 2.997l75.2-.186a2.054 2.054 0 0 0 2.044-2.012l1.268-62.421a1.951 1.951 0 0 0-1.96-2.004s-26.172.042-30.783.042c-4.611 0-7.535-2.222-7.535-6.482S152.3 63.92 152.3 63.92a2.033 2.033 0 0 0-2.015-2.018l-36.464-.23z" stroke="#979797" fillRule="evenodd" />
   </svg>
   <svg
   ref={tickRef}
   style={{display: "none" }}
   className="w-full" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#00ff00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5" />
   </svg>
  </section>
 </main>
)}
export const IMG = ({ url }: { url: string }) => <Image src={url || "/next.svg"} alt="image" loading="lazy" width={0} height={0} className="w-fit max-w-[600px] object-cover my-3" />

export const TABLE = ({ data }: { data: Array<Array<string | null>>}) => {
 // console.log(data.splice(1));
 
 return(
  <main className="p-3">
   <NoSsr>
   <table className="border-2 border-gray-600 bg-[#47556999] rounded-lg overflow-hidden">
    <thead>
     <tr className="bg-[#475569cc]">
      {data[0]?.map((item, index) => (<th key={index} className="border py-2 px-4 border-gray-600">{item}</th>))}
     </tr>
    </thead>
    <tbody>
     {data.filter((j,k) => k !== 0).map((row, ri) => (<tr key={ri} className="bg-[#47556944]">
      {row.map((col, ci) => (
       <td key={ci} className="border border-gray-600 py-2 px-4">{col}</td>
      ))}
     </tr>))}
    </tbody>
   </table>
   </NoSsr>
  </main>
 );
}

export const A = ({ link, children }: { link: string, children: string }) => <a href={link} target="_blank" className="p-2 text-blue-700">{children} ICON</a>;


export const TREE = ({ data, space }: {data: Record<string, any> | string, space: string}): ReactNode => {

 if(!data) return "";
 if(typeof(data) === "string") return space + data;
 return <div className="whitespace-pre font-mono">{
  Object.keys(data)?.map<ReactNode>((key, index) => <Fragment key={index}>{space}{key}<br/>{TREE({data: data[key], space: space.replaceAll("_", " ") + "  |__"})}</Fragment>) || ""
  }
 </div>;
};