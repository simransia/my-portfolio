import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Loader, Popup } from "@/components";
import StarsCanvas from "@/components/Stars";
import BlueButterFly from "@/models/butterFlyBlue";
// import ShiningButterFly from "@/models/butterflyShining";
// import ButterFly from "@/models/butterfly";
import CampScene from "@/models/Camp/";
import Ring from "@/models/ring";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [0.01, 0.01, 0.01];
        screenPosition = [0, -30, -80];
        // setIsMobileScreen(true);
      } else {
        screenScale = [0.04, 0.04, 0.04];
        screenPosition = [-18, -85, -220];
        // setIsMobileScreen(false);
      }
    }

    return [screenScale, screenPosition];
  };

  const [scale, position] = adjustIslandForScreenSize();

  console.log(currentStage, "currentStage");

  return (
    <div
      className="flex fixed z-0 bg-black font-Inter  min-h-screen flex-col items-center justify-between"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Navbar currentStage={currentStage} />
      <div className="absolute top-14 w-4/5 md:w-auto left-1/2 z-20 text-white -translate-x-1/2">
        <Popup currentStage={currentStage} />
      </div>
      <Canvas
        // className="relative flex justify-start items-start"
        className={`${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
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
          <directionalLight position={[-1, -1, 1]} intensity={3} />
          <directionalLight position={[1, -1, 1]} intensity={4} />
          <ambientLight intensity={2} />
          <hemisphereLight
            color="#ba56ab"
            groundColor="#f3f2f3"
            intensity={3}
            position={[1, 1, 1]}
          />
        </Suspense>
      </Canvas>
      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VicmJ3YjdzZ3FoOWR0aXl4enFzYmNkOHpwbW1jNDR6OWp4ZjFxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/53UOssg34A1o3LVRlz/giphy.gif"
        width="30"
        alt=""
        className="relative bottom-8"
      />
      <StarsCanvas />
    </div>
  );
}
