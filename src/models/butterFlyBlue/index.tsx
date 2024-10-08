/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animated-butterfly-d4fbcbaab845402999f30c5aa75851e6
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Scene from "@/assets/models/animated_butterfly.glb";
import * as THREE from "three";

type BlueButterFlyProps = {
  scale?: [number, number, number];
  rotation?: [number, number, number];
  [key: string]: any; // Allow other props if needed
};

const BlueButterFly = (props: BlueButterFlyProps) => {
  const butterFlyRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(Scene) as any;
  const { actions, names } = useAnimations(animations, butterFlyRef);

  useEffect(() => {
    actions[names[0]]?.reset().play();
  }, [animations]);

  useFrame(({ clock }) => {
    if (!butterFlyRef.current) return;

    const time = clock.getElapsedTime();
    const x = Math.sin(time) * 0.15; // Adjust amplitude to control horizontal movement range
    const y = Math.sin(time * 2) * 0.08 + 1; // Adjust amplitude to control vertical movement range
    const z = Math.cos(time) * 0.1; // Adjust amplitude to control horizontal movement range

    butterFlyRef.current.position.x = x;
    butterFlyRef.current.position.y = y;
    butterFlyRef.current.position.z = z;
  });

  return (
    <group ref={butterFlyRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_55">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Material.001"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Plane_52" />
                  <group name="Plane001_53" />
                  <group name="Plane002_54" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default BlueButterFly;
