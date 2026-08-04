import { GroupProps, MeshProps, Object3DProps } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Ref, useRef } from "react";
import { Monitor } from "../3d-loaders/monitor";
import { timelineScroll } from "../timeline";

const _cubes = [
  { pos: [-30, 0, 0], rot: [0, 0, 0], scale: 3, title: "Velense technologies", desc: "We build high-performance, scalable web applications using the latest frontend technologies. Our focus is on creating seamless user experiences with modern design and robust architecture." },
  { pos: [30, 0, -150], rot: [0, 0, 0], scale: 3, title: "Novavi Private limited", desc: "We build high-performance, scalable web applications using the latest frontend technologies. Our focus is on creating seamless user experiences with modern design and robust architecture." },
  { pos: [-30, 0, -300], rot: [0, 0, 0], scale: 3, title: "Synnefo Solutions", desc: "We build high-performance, scalable web applications using the latest frontend technologies. Our focus is on creating seamless user experiences with modern design and robust architecture." },
  { pos: [30, 0, -450], rot: [0, 0, 0], scale: 3, title: "Ploygon Town", desc: "We build high-performance, scalable web applications using the latest frontend technologies. Our focus is on creating seamless user experiences with modern design and robust architecture." },
];

export default function TimelineScene({ innerRef }: { innerRef: Ref<Group> }) {
  // const { pointer, camera } = useThree();
  // useFrame((state, delta) => {
  // const x = pointer.x / window.innerWidth;
  // const y = pointer.y / window.innerHeight;
  // camera.rotation.set(x * 10, y * 10, 0);
  // });
  return (
    <group ref={innerRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 500]} intensity={0.5} decay={0} />
      {_cubes.map((item, index) => (
        <Cube
          key={index}
          title={item.title}
          desc={item.desc}
          props={{
            scale: item.scale,
            position: new Vector3(...item.pos),
            rotation: item.rot as [number, number, number]
          }}
        />
      ))}
    </group>
  );
}


function Cube({ props, title, desc }: { props: JSX.IntrinsicElements['group'], title: string, desc: string }) {
  return (
    <Monitor props={props as JSX.IntrinsicElements['group']} title={title} desc={desc} />
    // <mesh {...props}>
    //  <boxGeometry args={[10, 10, 10]} />
    //  <meshStandardMaterial color={'orange'} />
    // </mesh>
  );
}