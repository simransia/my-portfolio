import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ContactForm, Loader, Popup } from "@/components";
import GlobeScene from "@/models/Cosmosphere";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // useEffect(() => {
  //   const handleScrollTop = () => {
  //     const scrollThreshold = 10;

  //     if (!isInitialLoad && window.scrollY <= scrollThreshold) {
  //       router.push("/projects");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScrollTop);

  //   // Set initial load to false after the first render
  //   setTimeout(() => {
  //     setIsInitialLoad(false);
  //   }, 1000);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollTop);
  //   };
  // }, [isInitialLoad, router]);

  return (
    <div className="bg-black scrollbar-hide overflow-x-hidden">
      <div
        className="flex sticky bg-black z-50 top-0 min-h-screen min-w-screen flex-col items-center justify-between"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          // className={`${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
          camera={{ near: 0.1, far: 1000 }}
        >
          {" "}
          <ScrollControls pages={3} damping={1}>
            <Suspense fallback={<Loader isContact={true} />}>
              <GlobeScene />
              <OrbitControls enableZoom={false} enablePan={true} />
              <directionalLight position={[-1, -1, 1]} intensity={1} />
              <directionalLight position={[1, -1, 1]} intensity={2} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <hemisphereLight
                color="#000000"
                groundColor="#72725d"
                intensity={2}
                position={[1, 1, 1]}
              />
            </Suspense>
          </ScrollControls>
        </Canvas>
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VicmJ3YjdzZ3FoOWR0aXl4enFzYmNkOHpwbW1jNDR6OWp4ZjFxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/53UOssg34A1o3LVRlz/giphy.gif"
          width="30"
          alt=""
          className="absolute top-[90%] right-16 rotate-90"
        />
      </div>
      <div className="h-screen pt-8 w-screen ">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
