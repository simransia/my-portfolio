/*
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525
*/
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import Scene from "@/assets/models/cosmo_sphere.glb";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cosmosphere = () => {
  const globeRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF(
    "https://res.cloudinary.com/dbstfw8yc/image/upload/v1724474050/simmi-portfolio/cosmosphere_iphmys.glb"
  ) as any;

  useFrame(() => {
    if (!globeRef.current) return;

    const scrollY = scroll.offset; // Should range from 0 to 1
    // console.log(scrollY, "here");
    const scale = 1 + scrollY * 20; // Adjust scale
    const positionY = -(scrollY * 10);
    const positionZ = scrollY * 25;

    globeRef.current.scale.set(scale, scale, scale);
    globeRef.current.position.y = positionY;
    globeRef.current.position.z = positionZ;

    const rotationSpeed = 0.003; // Adjust the speed of rotation
    globeRef.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={globeRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.rocks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.Wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_2.geometry}
        material={materials.walls}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_3.geometry}
        material={materials.roof}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_4.geometry}
        material={materials.widows}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_5.geometry}
        material={materials.derevoo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_6.geometry}
        material={materials.Fabric}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_7.geometry}
        material={materials.ground}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_8.geometry}
        material={materials.sphere}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_9.geometry}
        material={materials.None}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_10.geometry}
        material={materials.flame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_11.geometry}
        material={materials.moon}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_12.geometry}
        material={materials.stars}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_13.geometry}
        material={materials.sphere_2}
      />
    </group>
  );
};

export default Cosmosphere;
