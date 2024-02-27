"use client"

import { ReactNode, createContext } from "react";
import { signal, Signal } from "@preact/signals-react";

import { GlobalContextType } from "@r22/types/types";

const _globals = signal<GlobalContextType>({
 isNavOpen: false
});
export type GlobalsType = Signal<GlobalContextType>;
export const globalContext = createContext<GlobalsType>(_globals);


export function GlobalContext({children}: Readonly<{ children: React.ReactNode; }>): ReactNode {
 const WrapperComponent = () => {
  return(
   <globalContext.Provider value={_globals}>
    {children}
   </globalContext.Provider>
  );
 }

 return WrapperComponent();
}