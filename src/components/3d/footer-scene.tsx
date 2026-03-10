import { effect } from "@preact/signals-react";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { DoubleSide, Group } from "three";
import useViewportSize from "@r22/lib/hooks/use-viewport-size";
import { scrollTop, clientHeight } from "@r22/components/scrollbar";

export default function FooterScene({ mainRef }: { mainRef: RefObject<HTMLElement> }) {
 const ref = useRef<Group>(null);
 const { width, height } = useViewportSize(0);
 let scroll = 0;
 effect(() => {
  const info = mainRef.current?.getBoundingClientRect();
  const height = info?.height ?? 0;
  const top = info?.top ?? 0;
  const TS = scrollTop.value + top!;
  const OS = scrollTop.value - TS;
  const OH = height! - clientHeight.value;
  const TL = top - height > 0 ? 0 : scrollTop.value - (TS - height);
  scroll = TL / height;
  console.log(scroll);

  if (ref.current) {
   ref.current.rotation.x = -(scroll * (Math.PI / 2));
  }
  // scroll = TL / OH;
  // console.log(scroll);

  // console.log(scroll);
  // if (innerRef.current) innerRef.current.position.set(0, 0, 500 * scroll);
 })
 useFrame(() => {
 })
 return (
  <group position={[0, -height / 2, 0]}>
   <group ref={ref}>
    <group position={[0, height / 2, 0]}>

    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[10,10,40]} />
      <meshStandardMaterial color={'gray'} side={DoubleSide} />
     </mesh>    

     <mesh rotation={[0, 0, 0]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial color={'gray'} side={DoubleSide} />
     </mesh>
     <ambientLight intensity={1} />
     <pointLight position={[0, 0, 500]} intensity={1} decay={0} />
    </group>
   </group>
  </group>
 );
}