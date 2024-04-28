import { GroupProps, MeshProps } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Ref, useRef } from "react";

const _cubes = [
 { pos: [-50, 0, 0], scale: 2 },
 { pos: [50, 0, -50], scale: 4 },
 { pos: [-50, 0, -100], scale: 2 },
 { pos: [50, 0, -150], scale: 4 },
 { pos: [-50, 0, -200], scale: 2 },
 { pos: [50, 0, -250], scale: 4 },
 { pos: [-50, 0, -300], scale: 2 },
 { pos: [50, 0, -350], scale: 4 },
 { pos: [-50, 0, -400], scale: 2 },
 { pos: [50, 0, -450], scale: 4 },
 { pos: [-50, 0, -500], scale: 2 },
];

export default function TimelineScene({innerRef}: {innerRef: Ref<Group>}) {
  const ref = useRef<Group>(null);
 const { pointer, camera } = useThree();
 useFrame((state, delta) => {
  const x = pointer.x / window.innerWidth;
  const y = pointer.y / window.innerHeight;
  // console.log(x,y);
  camera.rotation.set(x*10, y*10, 0);
 });
 return (
  <group ref={innerRef}>
   <ambientLight intensity={1} />
   <pointLight position={[0, 0, 500]} intensity={6} decay={0} />
   {_cubes.map((item, index) => (
    <Cube
     key={index}
     scale={item.scale}
     position={new Vector3(...item.pos)} />
   ))}

  </group>
 );
}


function Cube(props:MeshProps) {
 return (
  <mesh {...props}>
   <boxGeometry args={[10, 10, 10]} />
   <meshStandardMaterial color={'orange'} />
  </mesh>
 );
}