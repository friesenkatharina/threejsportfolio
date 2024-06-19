import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";

function WebDesign() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default WebDesign;
