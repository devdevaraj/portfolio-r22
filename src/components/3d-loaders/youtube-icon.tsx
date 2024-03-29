/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Torus: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export default function YoutubeIcon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3d/custom-youtube-3d.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Material}
          position={[0.0013, 0.0003, 0.0297]}
          scale={[0.6988, 0.0453, 0.6988]}
        />
        <mesh
          name="Torus"
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.Material}
          position={[0.0013, 0.0003, 0.0297]}
          scale={[1.0448, 0.2375, 1.0448]}
        />
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials["Material.002"]}
          position={[0.0001, 0.0455, -0.0001]}
          scale={[5.6775, 2.118, 5.6775]}
        />
        <mesh
          name="Curve001"
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials["Material.002"]}
          position={[0.0001, -0.0444, -0.0001]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-5.6775, -2.118, -5.6775]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d/custom-youtube-3d.glb");
