"use client"
import { useParams, notFound } from "next/navigation";
import { H1, H2, H3, CODE, IMG, TABLE, A, TREE } from "@r22/components/markdown/components";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import data from "@r22/data/tutorials.json";

export default function Instuction() {
 const { keyword } = useParams();
 const path = typeof (keyword) === "string" ? keyword : keyword[0];

 const keywords: Array<String> = Object.keys(data);
 if (!keywords.includes(path)) return notFound();
 return (
  <main className="w-full text-white p-10 grid place-items-center">
   <H1>h1</H1>
   <H2>h2</H2>
   <H3>h3</H3>

   <CODE>{`let res = await axios.get("/api/get-data);
console.log(res.data);`}</CODE>
   <IMG url={"/next.svg"}/>
   <TABLE data={[
    ["id", "name", "place"],
    ["1", "hari", "kottha"],
    ["2", "ravi", "Kochi"],
    ["3", "Devan", "Cherthala"],
    ]} />
    <A link="https://mongodb.org">Mongodb</A>
    <TREE space="" data={{"/": {
     root: {},
     home: {
      user1: null,
      user2: null,
      user3: {
       desktop: "myimage.jpeg"
      }
     },
     etc: {
      systemd: null,
      init: null,
      apt: "source.list"
     }
     }}} />
  </main>
 );
}

{/* <Markdown rehypePlugins={[remarkGfm]}>
{`### This is mark
~~~js
down
~~~`}
</Markdown> */}