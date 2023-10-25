import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import { Backdrop, CameraRig, Shirt } from "../components";

const CanvasModel = () => {
  return (
    <Canvas
      shadows={true}
      camera={{ position: [0, 0, 0], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full transition-all ease-in"
    >
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;