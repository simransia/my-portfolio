import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Ring = (props) => {
  const ref = useRef();

  const texture = useTexture("/work_.png");

  // Adjust the texture's wrap mode to RepeatWrapping
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  useFrame((state, delta) => {
    // Rotate the ring slowly
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.y += 0.01 * delta;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      {/* Apply the texture directly to the MeshBasicMaterial */}
      <meshBasicMaterial
        map={texture}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
};

export default Ring;
