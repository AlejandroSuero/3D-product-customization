import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import type { GLTFResult } from "../types";

import state from "../store";

const Shirt = () => {
  const snapshot = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb") as GLTFResult;

  const logoTexture = useTexture(snapshot.logoDecal);
  const fullTexture = useTexture(snapshot.fullDecal);

  useFrame((_, delta) => 
    easing.dampC(materials.lambert1.color, snapshot.color, 0.25, delta)
  );

  const stateStr = JSON.stringify(state);

  return (
    <group
      key={stateStr}
    >
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snapshot.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snapshot.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  );
};

useGLTF.preload("/shirt_baked.glb");

export default Shirt;