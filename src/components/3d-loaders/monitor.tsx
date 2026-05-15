import * as THREE from 'three'
import React, { useRef } from 'react'
import { effect } from '@preact/signals-react'
import { useGLTF, useAnimations, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { timelineScroll } from '../timeline'

type GLTFResult = GLTF & {
 nodes: {
  BG_BG_MTL_0: THREE.Mesh
  pPlane1_monter_MTL_0: THREE.Mesh
  pCube20_monter_MTL_0: THREE.Mesh
  pCube19_monter_MTL_0: THREE.Mesh
  pCube18_TV_MTL_0: THREE.Mesh
  pCube17_TV_MTL_0: THREE.Mesh
  pCube16_TV_MTL_0: THREE.Mesh
  pCube15_TV_MTL_0: THREE.Mesh
  pCube14_TV_MTL_0: THREE.Mesh
  pCube13_TV_MTL_0: THREE.Mesh
  pCube12_TV_MTL_0: THREE.Mesh
  pCube3_TV_MTL_0: THREE.Mesh
  pCube2_TV_MTL_0: THREE.Mesh
  pCube1_TV_MTL_0: THREE.Mesh
  pCube7_TV_MTL_0: THREE.Mesh
  pCube5_TV_MTL_0: THREE.Mesh
  pCube4_TV_MTL_0: THREE.Mesh
  pCube8_TV_MTL_0: THREE.Mesh
  pCube6_TV_MTL_0: THREE.Mesh
  pCube9_TV_MTL_0: THREE.Mesh
  pCube10_TV_MTL_0: THREE.Mesh
  pCube11_TV_MTL_0: THREE.Mesh
  pCube7_TV_MTL_0_1: THREE.Mesh
  pCube5_TV_MTL_0_1: THREE.Mesh
  pCube4_TV_MTL_0_1: THREE.Mesh
  pCube8_TV_MTL_0_1: THREE.Mesh
  pCube6_TV_MTL_0_1: THREE.Mesh
  pCube9_TV_MTL_0_1: THREE.Mesh
  pCube10_TV_MTL_0_1: THREE.Mesh
  pCube11_TV_MTL_0_1: THREE.Mesh
 }
 materials: {
  BG_MTL: THREE.MeshStandardMaterial
  monter_MTL: THREE.MeshStandardMaterial
  TV_MTL: THREE.MeshStandardMaterial
 }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

function wrapText(text: string, maxLineLength: number) {
 const words = text.split(' ');
 let currentLine = words[0] || '';
 const lines = [];

 for (let i = 1; i < words.length; i++) {
  if (currentLine.length + words[i].length + 1 <= maxLineLength) {
   currentLine += ' ' + words[i];
  } else {
   lines.push(currentLine);
   currentLine = words[i];
  }
 }
 if (currentLine) lines.push(currentLine);
 return lines;
}

export function Monitor({ props, title, desc }: { props: JSX.IntrinsicElements['group'], title: string, desc: string }) {
 const group = useRef<THREE.Group>(null)
 const { nodes, materials, animations } = useGLTF('/3d/sci_fi_monitor.glb') as GLTFResult;

 const planeMaterial = React.useMemo(() => {
  const mat = materials.monter_MTL.clone();
  mat.transparent = true;
  mat.opacity = 0.7;
  return mat;
 }, [materials.monter_MTL]);

 const eqRefs = useRef<(THREE.Group | null)[]>([]);
 useFrame((state) => {
  const t = state.clock.elapsedTime;
  eqRefs.current.forEach((ref, index) => {
   if (ref) {
    ref.scale.y = 1 + Math.sin(t * (2 + index * 1.2) + index * 2) * 0.8;
   }
  });
 });

 let rotation = 0;
 effect(() => {
  const buffer = ((timelineScroll.value * 450) + (props.position as any)?.z!) | 0;
  if (0 < buffer && buffer < 50) {
   rotation = buffer * Math.PI * 0.005;
   const xPos = (props.position as any).x;
   group.current?.rotation.set(0, rotation * (-xPos / Math.abs(xPos)), 0);
  }
 })
 // const { actions } = useAnimations<GLTFActions>(animations, group)
 return (
  <group ref={group} {...props} dispose={null}>
   <group scale={150} position={[0, -10, 0]} name="Sketchfab_Scene">
    <group
     name="Sketchfab_model"
     rotation={[-Math.PI / 2, 0, 0]}
     userData={{ name: 'Sketchfab_model' }}>
     <group
      name="4e4541ff511d406b8a3dfc7144802368fbx"
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
      userData={{ name: '4e4541ff511d406b8a3dfc7144802368.fbx' }}>
      <group name="Object_2" userData={{ name: 'Object_2' }}>
       <group name="RootNode" userData={{ name: 'RootNode' }}>
        <group name="TV_ALL" userData={{ name: 'TV_ALL' }}>
         <group name="BG" position={[0, -2.5, 1.5]} scale={1.5} userData={{ name: 'BG' }}>
          <mesh
           name="BG_BG_MTL_0"
           castShadow
           receiveShadow
           geometry={nodes.BG_BG_MTL_0.geometry}
           material={materials.BG_MTL}
           userData={{ name: 'BG_BG_MTL_0' }}
          />
         </group>
         <group name="monter" userData={{ name: 'monter' }}>
          <group
           name="pPlane1"
           position={[0, 6, 0.05]}
           rotation={[Math.PI / 2, 0, 0]}
           scale={[15.7, 1, 8.7]}
           userData={{ name: 'pPlane1' }}>
           <mesh
            name="pPlane1_monter_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pPlane1_monter_MTL_0.geometry}
            material={planeMaterial}
            userData={{ name: 'pPlane1_monter_MTL_0' }}
           />
          </group>
          <group
           name="pCube20"
           position={[7.00008, 1.17561, 0]}
           rotation={[0, 0, Math.PI]}
           scale={[1, 1, 0.1]}
           userData={{ name: 'pCube20' }}>
           <mesh
            name="pCube20_monter_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube20_monter_MTL_0.geometry}
            material={planeMaterial}
            userData={{ name: 'pCube20_monter_MTL_0' }}
           />
          </group>
          <group
           name="pCube19"
           position={[-6.9949, 10.81252, 0]}
           scale={[1, 1, 0.1]}
           userData={{ name: 'pCube19' }}>
           <mesh
            name="pCube19_monter_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube19_monter_MTL_0.geometry}
            material={planeMaterial}
            userData={{ name: 'pCube19_monter_MTL_0' }}
           />
          </group>
         </group>
         <group name="Cube" userData={{ name: 'Cube' }}>
          <group
           ref={(el) => { if (el) eqRefs.current[0] = el; }}
           name="pCube18"
           position={[0, -1, 0]}
           scale={[1, 0.27409, 1]}
           userData={{ name: 'pCube18' }}>
           <mesh
            name="pCube18_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube18_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube18_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[1] = el; }}
           name="pCube17"
           position={[0, -1, 0]}
           scale={[1, 0.27409, 1]}
           userData={{ name: 'pCube17' }}>
           <mesh
            name="pCube17_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube17_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube17_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[2] = el; }}
           name="pCube16"
           position={[0, -1, 0]}
           scale={[1, 1, 1]}
           userData={{ name: 'pCube16' }}>
           <mesh
            name="pCube16_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube16_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube16_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[3] = el; }}
           name="pCube15"
           position={[0, -1, 0]}
           scale={[1, 1, 1]}
           userData={{ name: 'pCube15' }}>
           <mesh
            name="pCube15_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube15_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube15_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[4] = el; }}
           name="pCube14"
           position={[0, -1, 0]}
           scale={[1, 1, 1]}
           userData={{ name: 'pCube14' }}>
           <mesh
            name="pCube14_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube14_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube14_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[5] = el; }}
           name="pCube13"
           position={[0, -1, 0]}
           scale={[1, 1, 1]}
           userData={{ name: 'pCube13' }}>
           <mesh
            name="pCube13_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube13_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube13_TV_MTL_0' }}
           />
          </group>
          <group
           ref={(el) => { if (el) eqRefs.current[6] = el; }}
           name="pCube12"
           position={[0, -1, 0]}
           scale={[1, 1, 1]}
           userData={{ name: 'pCube12' }}>
           <mesh
            name="pCube12_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube12_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube12_TV_MTL_0' }}
           />
          </group>
         </group>
         <group name="TV" userData={{ name: 'TV' }}>
          <group
           name="pCube3"
           position={[0, 5, 0]}
           rotation={[0, 0, Math.PI]}
           scale={[16, 9, 0.2]}
           userData={{ name: 'pCube3' }}>
           <mesh
            name="pCube3_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube3_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube3_TV_MTL_0' }}
           />
          </group>
          <group
           name="pCube2"
           position={[0, 7, 0]}
           scale={[16, 9, 0.2]}
           userData={{ name: 'pCube2' }}>
           <mesh
            name="pCube2_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube2_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube2_TV_MTL_0' }}
           />
          </group>
          <group
           name="pCube1"
           position={[0, 6, 0]}
           scale={[16, 9, 0.2]}
           userData={{ name: 'pCube1' }}>
           <mesh
            name="pCube1_TV_MTL_0"
            castShadow
            receiveShadow
            geometry={nodes.pCube1_TV_MTL_0.geometry}
            material={materials.TV_MTL}
            userData={{ name: 'pCube1_TV_MTL_0' }}
           />
          </group>
          <group position={[-5, 8.5, 0]}>
           <Text3D
            font={"/fonts/google-sans.json"}
            size={0.7}
            height={0.08}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.005}
            bevelSegments={8}
           >
            {title}
            <meshBasicMaterial color="#cceeff" />
           </Text3D>
           <group position={[0, -1.5, 0]}>
            {wrapText(desc, 35).map((line, index) => (
             <Text3D
              key={index}
              position={[0, -index * 0.8, 0]}
              font={"/fonts/google-sans.json"}
              size={0.4}
              height={0.08}
              curveSegments={4}
              bevelEnabled={false}
             >
              {line}
              <meshBasicMaterial color="#cceeff" />
             </Text3D>
            ))}
           </group>
          </group>
         </group>
         <group
          name="Dec_Top"
          position={[0, 12, 0]}
          rotation={[0, 0, Math.PI]}
          userData={{ name: 'Dec_Top' }}>
          <group name="cube" userData={{ name: 'cube' }}>
           <group
            name="pCube7"
            position={[-7, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube7' }}>
            <mesh
             name="pCube7_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube7_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube7_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube5"
            position={[-9, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube5' }}>
            <mesh
             name="pCube5_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube5_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube5_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube4"
            position={[-10, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube4' }}>
            <mesh
             name="pCube4_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube4_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube4_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube8"
            position={[-6, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube8' }}>
            <mesh
             name="pCube8_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube8_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube8_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube6"
            position={[-8, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube6' }}>
            <mesh
             name="pCube6_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube6_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube6_TV_MTL_0' }}
            />
           </group>
          </group>
          <group name="cone" userData={{ name: 'cone' }}>
           <group
            name="pCube9"
            position={[-9, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube9' }}>
            <mesh
             name="pCube9_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube9_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube9_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube10"
            position={[-8.38074, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube10' }}>
            <mesh
             name="pCube10_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube10_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube10_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube11"
            position={[-7.74243, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube11' }}>
            <mesh
             name="pCube11_TV_MTL_0"
             castShadow
             receiveShadow
             geometry={nodes.pCube11_TV_MTL_0.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube11_TV_MTL_0' }}
            />
           </group>
          </group>
         </group>
         <group name="Dec_Down" userData={{ name: 'Dec_Down' }}>
          <group name="cube_1" userData={{ name: 'cube' }}>
           <group
            name="pCube7_1"
            position={[-7, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube7' }}>
            <mesh
             name="pCube7_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube7_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube7_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube5_1"
            position={[-9, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube5' }}>
            <mesh
             name="pCube5_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube5_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube5_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube4_1"
            position={[-10, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube4' }}>
            <mesh
             name="pCube4_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube4_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube4_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube8_1"
            position={[-6, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube8' }}>
            <mesh
             name="pCube8_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube8_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube8_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube6_1"
            position={[-8, 0.5, 0]}
            scale={[0.7, 0.7, 0.2]}
            userData={{ name: 'pCube6' }}>
            <mesh
             name="pCube6_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube6_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube6_TV_MTL_0' }}
            />
           </group>
          </group>
          <group name="cone_1" userData={{ name: 'cone' }}>
           <group
            name="pCube9_1"
            position={[-9, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube9' }}>
            <mesh
             name="pCube9_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube9_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube9_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube10_1"
            position={[-8.38074, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube10' }}>
            <mesh
             name="pCube10_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube10_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube10_TV_MTL_0' }}
            />
           </group>
           <group
            name="pCube11_1"
            position={[-7.74243, -0.53036, 0]}
            scale={0}
            userData={{ name: 'pCube11' }}>
            <mesh
             name="pCube11_TV_MTL_0_1"
             castShadow
             receiveShadow
             geometry={nodes.pCube11_TV_MTL_0_1.geometry}
             material={materials.TV_MTL}
             userData={{ name: 'pCube11_TV_MTL_0' }}
            />
           </group>
          </group>
         </group>
        </group>
       </group>
      </group>
     </group>
    </group>
   </group>
  </group>
 )
}

useGLTF.preload('/3d/sci_fi_monitor.glb')
