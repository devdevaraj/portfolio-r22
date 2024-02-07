"use client"

import { ReactNode, createContext } from "react";
import { signal, Signal } from "@preact/signals-react";

import { GlobalContextType } from "@r22/types/types";

const globalContext = createContext<Object>({});
const _globals = signal<GlobalContextType>({});

// class Globals{
//  public _globals: Signal;
//  constructor() {
//   this._globals = _globals;
//  }
//  static set globals(value: Object) {
//   this._globals = {...this.globals}
//  }
// }


export function GlobalContext({children}: Readonly<{ children: React.ReactNode; }>): ReactNode {
 const WrapperComponent = () => {
  return(
   <globalContext.Provider value={{_globals}}>
    {children}
   </globalContext.Provider>
  );
 }

 return WrapperComponent();
}