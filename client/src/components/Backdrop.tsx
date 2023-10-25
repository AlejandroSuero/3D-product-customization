import { easing } from "maath";
import { useRef } from "react";
import { useFrame, ReactThreeFiber } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import THREE from "three";

type SoftShadowMaterialProps = {
  map: THREE.Texture
  color?: ReactThreeFiber.Color
  alphaTest?: number
  blend?: number
}

interface IAccumulativeContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lights: Map<any, any>
  temporal: boolean
  frames: number
  blend: number
  count: number
  getMesh: () => THREE.Mesh<THREE.PlaneGeometry, SoftShadowMaterialProps & THREE.ShaderMaterial>
  reset: () => void
  update: (frames?: number) => void
}

const Backdrop = () => {
  const shadowsRef = useRef() as React.MutableRefObject<IAccumulativeContext>;
  return (
    <AccumulativeShadows
      ref={shadowsRef}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={10}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;