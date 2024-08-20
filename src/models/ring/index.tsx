import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type RingProps = {
  position?: THREE.Vector3;
};

const Ring = (props: RingProps) => {
  const ref = useRef<THREE.Mesh>(null);

  const textTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      canvas.width = 4000;
      canvas.height = 50;
      context.font = "25px Arial thin"; // Adjust font style
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(
        "Bringing Ideas to Life, Line by Line!    🩵    Crafting Code, Crafting Dreams!    🩵    Bridging Creativity and Technology!",
        canvas.width / 4,
        canvas.height / 2 + 5
      );
      return new THREE.CanvasTexture(canvas);
    } else {
      // Fallback texture if context is null
      return new THREE.Texture();
    }
  }, []);

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      textTexture: { value: textTexture },
      speed: { value: 0.02 }, // Adjust speed of text scrolling
      repeat: { value: 1 }, // Adjust repeat value to control text repetition
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * 3.141592653589793 * 4.0) / 4.0, position.z);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D textTexture;
      uniform float time;
      uniform float speed;
      uniform float repeat;
      varying vec2 vUv;
      void main() {
        float offset = time * speed * repeat;
        float wrappedUv = mod(vUv.x + offset, 1.0);
        vec2 uv = vec2(wrappedUv, vUv.y);
        gl_FragColor = texture2D(textTexture, uv);
      }
    `,
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (ref.current && ref.current.material) {
      //@ts-ignore
      ref.current.material.uniforms.time.value = elapsedTime;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[3.2, 3.2, 0.14, 128, 16, true]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
};

export default Ring;
