/*
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/common-brimstone-9c1c26ec22514255b09f94fc1b7358ea
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Scene from "@/assets/models/common_brimstone (1).glb";
import * as THREE from "three";

const ButterFly = () => {
  const butterFlyRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(Scene) as any;
  const { actions, names } = useAnimations(animations, butterFlyRef);

  useEffect(() => {
    actions[names[0]]?.reset().play();
  }, [animations]);

  useFrame(({ clock, camera }) => {
    if (!butterFlyRef.current) return;
    // Update the Y position to simulate bird-like motion using a sine wave
    butterFlyRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1;

    // Check if the bird reached a certain endpoint relative to the camera
    if (butterFlyRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      butterFlyRef.current.rotation.y = Math.PI;
    } else if (butterFlyRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      butterFlyRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (butterFlyRef.current.rotation.y === 0) {
      // Moving forward
      butterFlyRef.current.position.x += 0.01;
      butterFlyRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      butterFlyRef.current.position.x -= 0.01;
      butterFlyRef.current.position.z += 0.01;
    }
  });

  console.log(names);
  return (
    <group ref={butterFlyRef} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={35.038}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_63" scale={0.03}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.CommonBrimstone}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="CommonBrimstone_62" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ButterFly;
