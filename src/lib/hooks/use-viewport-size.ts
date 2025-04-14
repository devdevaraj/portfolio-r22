import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { PerspectiveCamera } from "three";

export default function useViewportSize(depth = 0) {
  const { camera, size } = useThree();
  const aspect = size.width / size.height;

  return useMemo(() => {
    if (camera instanceof PerspectiveCamera) {
      const height =
        2 *
        Math.tan((camera.fov * Math.PI) / 360) *
        Math.abs(depth - camera.position.z);
      const width = height * aspect;
      return { width, height };
    }
    return { width: 0, height: 0 };
  }, [camera, aspect, depth]);
}
