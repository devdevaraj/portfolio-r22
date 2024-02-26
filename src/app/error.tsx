"use client"

import { useEffect } from "react";

export default function Error({ error, reset }: {
 error: Error & { digest?: string },
 reset: () => void
}) {
 useEffect(() => {
  console.log(error);
 },[error]);
 return(
  <main className="text-white">
   <button onClick={() => reset()}>Try again</button>
  </main>
 );
}