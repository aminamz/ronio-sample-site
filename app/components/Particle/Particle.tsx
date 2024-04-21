"use client";

import styles from "@/app/components/Particle/Particle.module.css";

import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Particle() {
  return (
    <div className={styles.canvas}>
      <h2 className={styles.title}>تنها ابزاری که برای طراحی نیاز دارید</h2>
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enablePan={false}         
        />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Item />
      </Canvas>
    </div>
  );
}

function Item() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.2;
      mesh.current.rotation.z += delta * 0.2;
    }
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"red"} attach={"material-0"} />
      <meshStandardMaterial color={"yellow"} attach={"material-1"} />
      <meshStandardMaterial color={"blue"} attach={"material-2"} />
      <meshStandardMaterial color={"green"} attach={"material-3"} />
      <meshStandardMaterial color={"#ff6683"} attach={"material-4"} />
      <meshStandardMaterial color={"purple"} attach={"material-5"} />
    </mesh>
  );
}

// const width = window.innerWidth, height = window.innerHeight;

// // init

// const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
// camera.position.z = 1;

// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setSize( width, height );
// renderer.setAnimationLoop( animation );
// document.body.appendChild( renderer.domElement );

// // animation

// function animation( time ) {

// 	mesh.rotation.x = time / 2000;
// 	mesh.rotation.y = time / 1000;

// 	renderer.render( scene, camera );

// }
