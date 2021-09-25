import React from "react";
import "normalize.css";
import { OrbitControls } from "@react-three/drei";

import FullScreenCanvas from "./canvas/FullScreenCanvas";
import ExampleCamera from "./canvas/ExampleCamera";
import ExampleBox from "./canvas/ExampleBox";

export default function App(): JSX.Element {
  return (
    <FullScreenCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      <ExampleCamera />
      <ExampleBox />
    </FullScreenCanvas>
  );
}
