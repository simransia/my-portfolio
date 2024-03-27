"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Loader, Popup } from "@/components";
import StarsCanvas from "@/components/Stars";
import ButterFly from "@/models/butterfly";
import BlueButterFly from "@/models/butterFlyBlue";
import ShiningButterFly from "@/models/butterflyShining";
import CampScene from "@/models/Camp";
import Ring from "@/models/ring";

export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.01, 0.01, 0.01];
      screenPosition = [0, -30, -80];
      // setIsMobileScreen(true);
    } else {
      screenScale = [0.04, 0.04, 0.04];
      screenPosition = [-18, -85, -220];
      // setIsMobileScreen(false);
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustIslandForScreenSize();

  console.log(currentStage);

  return (
    <div
      className="flex fixed z-0 bg-black  min-h-screen flex-col items-center justify-between"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="absolute top-8 left-1/2 text-white -translate-x-1/2">
        <Popup currentStage={currentStage} />
      </div>
      <Canvas className="relative flex" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <CampScene
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={position}
            scale={scale}
            rotation={[-0.1, -0.3, 0]}
            // isMobileScreen={isMobileScreen}
          />
          <Ring position={[0, -0.8, 0]} />
          {/* <ButterFly scale={[0.06, 0.06, 0.06]} rotation={[1, -0.5, 0]} /> */}
          <BlueButterFly scale={[0.08, 0.08, 0.08]} rotation={[1, 1.8, 0.2]} />
          {/* <ShiningButterFly scale={[0.1, 0.1, 0.1]} rotation={[1, -0.5, 0]} /> */}
          <directionalLight position={[-1, -1, 1]} intensity={1} />
          <directionalLight position={[1, -1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            color="#F2D2BD"
            groundColor="#000000"
            intensity={2}
            position={[1, 1, 1]}
          />
        </Suspense>
      </Canvas>
      <StarsCanvas />
    </div>
  );
}
