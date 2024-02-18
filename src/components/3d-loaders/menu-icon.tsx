import * as THREE from "three";
import React, { Ref, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
 nodes: {
  ["Box045_07_-_Default_0"]: THREE.Mesh;
  ["Box045_01_-_Default_0"]: THREE.Mesh;
 };
 materials: {
  ["07_-_Default"]: THREE.MeshStandardMaterial;
  ["01_-_Default"]: THREE.MeshStandardMaterial;
 };
};

export default function MenuIcon({ scale, innerRef }:{ scale: number, innerRef: Ref<Group> }) {
 const { nodes, materials } = useGLTF("/3d/menu-icon.glb") as GLTFResult;
 return (
  <group scale={scale} ref={innerRef} dispose={null}>
   <group name="Scene">
    <group
     name="Sketchfab_model"
     position={[0, -33.619, 0]}
     rotation={[-Math.PI / 2, 0, 0]}
     scale={0.2402}
    >
     <group
      name="20febdbbeecc4b7cb5c8f772514e8bd0fbx"
      rotation={[Math.PI / 2, 0, 0]}
     >
      <group name="RootNode">
       <group
        name="Box045"
        position={[119.993, 160, -120.6125]}
        rotation={[-Math.PI / 2, 0, 0]}
       >
        <mesh
         name="Box045_01_-_Default_0"
         castShadow
         receiveShadow
         geometry={nodes["Box045_01_-_Default_0"].geometry}
         material={materials["01_-_Default"]}
         position={[-163.5932, -163.2303, 16.3321]}
        />
        <mesh
         name="Box045_07_-_Default_0"
         castShadow
         receiveShadow
         geometry={nodes["Box045_07_-_Default_0"].geometry}
         material={materials["07_-_Default"]}
         position={[-119.4946, -119.4986, -20.4212]}
        />
       </group>
      </group>
     </group>
    </group>
   </group>
  </group>
 );
}

useGLTF.preload("/3d/menu-icon.glb");
