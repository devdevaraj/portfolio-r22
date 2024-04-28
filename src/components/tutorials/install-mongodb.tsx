import { H1, H2, H3, CODE, IMG, TABLE, A, TREE } from "@r22/components/markdown/components";

export default function TutorialBody() {
 return (
  <main>
   <H1>h1</H1>
   <H2>h2</H2>
   <H3>h3</H3>

   <CODE>{`let res = await axios.get("/api/get-data);
console.log(res.data);`}</CODE>
   <IMG url={"/next.svg"} />
   <TABLE data={[
    ["id", "name", "place"],
    ["1", "hari", "kottha"],
    ["2", "ravi", <A link="https://mongodb.org">Mongodb</A>],
    ["3", "Devan", "Cherthala"],
   ]} />
   <A link="https://mongodb.org">Mongodb</A>
   <TREE space="" data={{
    "/": {
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
    }
   }} /> 
  </main>
 );
}