import { Canvas } from "@react-three/fiber";
import React, { CSSProperties, Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import type { AmbientLightProps, CanvasProps, PointLightProps } from "@react-three/fiber";

function LightCanvas({ children, canvas, point, ambient, style, orbitControls }: {
 children?: JSX.Element,
 canvas?: CanvasProps,
 point?: PointLightProps,
 ambient?: AmbientLightProps,
 style?: CSSProperties,
 orbitControls?: Boolean | undefined
}) {
 return (
  <Canvas {...canvas} style={style}>
   <Suspense fallback={null}>
   {orbitControls && <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
       />}
    <pointLight {...point} />
    <ambientLight {...ambient} />
    {children}
   </Suspense>
  </Canvas>
 )
}

export default LightCanvas;