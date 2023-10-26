import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh;
  };
  materials: {
    ["lambert1"]: THREE.MeshStandardMaterial;
  };
};

export type ButtonType = "filled" | "outlined";

export type TabName = "logoShirt" | "stylishShirt";

export type TextureType = "logo" | "full";

export type ThreeDPosition = [x: number, y: number, z: number];

export type TabType = { name: string, icon: string, alt: string, title: string };

export type TabsType = TabType[];

export type DecalStateType = { stateProperty: "logoDecal" | "fullDecal", filterTab: "logoShirt" | "stylishShirt" };

export type DecalType = { logo: DecalStateType, full: DecalStateType };

export type DecalTypeEntries = "logo" | "full";

export type ActiveTabType = { logoShirt: boolean, stylishShirt: boolean };

export type DirectionType = "left" | "right" | "up" | "down";

export type AnimationValueType = {

  x?: number,
  y?: number,
  opacity?: number,
  transition?: Transition
};

export type AnimationType = {
  initial?: AnimationValueType,
  animate?: AnimationValueType,
  exit?: AnimationValueType,
  transition?: Transition
}

type SoftShadowMaterialProps = {
  map: THREE.Texture
  color?: ReactThreeFiber.Color
  alphaTest?: number
  blend?: number
}

export interface IAccumulativeContext {
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

export interface ProjectConfig {
  development: {
    backendUrl: string;
  };
  production: {
    backendUrl: string;
  };
}