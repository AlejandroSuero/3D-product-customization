import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import type { Group, Object3DEventMap } from "three";
import type { MutableRefObject } from "react";

import state from "../store";

type ThreeDPosition = [x: number, y: number, z: number];

const CameraRig = ({
  children
}: {
  children: React.ReactNode
}) => {
  const snapshot = useSnapshot(state);
  const groupRef = useRef() as MutableRefObject<Group<Object3DEventMap>>;

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition: ThreeDPosition = [-0.4, 0, 2];
    if (snapshot.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });


  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default CameraRig;