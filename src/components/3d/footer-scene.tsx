import { effect } from "@preact/signals-react";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { DoubleSide, Group } from "three";
import useViewportSize from "@r22/lib/hooks/use-viewport-size";
import { scrollTop, clientHeight } from "@r22/components/scrollbar";
import { Text3D, Center } from "@react-three/drei";

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
    // console.log(scroll);

    if (ref.current) {
      ref.current.rotation.x = (scroll * (Math.PI)) - (Math.PI);
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
      <group ref={ref} rotation={[Math.PI, 0, 0]}>
        <group position={[0, height / 2, 0]}>
          <Center position={[0, 0, 15]}>
            <Text3D
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[1, 1, 1]}
              font="/fonts/google-sans.json"
              size={100}
              height={40}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.2}
              bevelSize={0.05}
              bevelSegments={5}
            >
              THE END
              <meshStandardMaterial color={'#ccf'} side={DoubleSide} transparent={true} opacity={1} />
            </Text3D>
          </Center>

          <mesh rotation={[0, 0, 0]}>
            <boxGeometry args={[width, height, 40]} />
            <meshStandardMaterial color={'skyblue'} side={DoubleSide} transparent={true} opacity={0.1} />
          </mesh>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 500]} intensity={0.5} decay={0} />
        </group>
      </group>
    </group>
  );
}