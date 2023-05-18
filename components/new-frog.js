import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Frog = () => {
  const groupRef = useRef();
  const controlsRef = useRef();

  // Load the materials for the model
  const mtlLoader = new MTLLoader();
  mtlLoader.load('/frog.mtl', materials => {
    // Set the base path for the textures
    materials.preload();
    materials.baseUrl = '';

    // Load the geometry for the model
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('frog.obj', object => {
      // Set the texture for the model
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load('/frog.png');
      object.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });

      // Add the model to the scene
      groupRef.current.add(object);
    });
  });

  // Set up a clock for time-based rotation
  const clockRef = useRef(new THREE.Clock());

  useFrame(() => {
    const delta = clockRef.current.getDelta(); // Get the time delta
    if (groupRef.current) {
      const speed = 0.5; // Rotation speed in radians per second
      groupRef.current.rotation.y += speed * delta; // Apply time-based rotation
      groupRef.current.scale.set(1, 1, 1);
    }
  });

  const { camera, gl } = useThree();

  // Initialize the OrbitControls
  useFrame(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement);
    controlsRef.current.enableDamping = true; // Enable damping for smoother controls
    controlsRef.current.dampingFactor = 0.05; // Adjust the damping factor for smoother controls
    controlsRef.current.rotateSpeed = 0.001; // Adjust the rotation speed (default is 1.0)
    controlsRef.current.zoomSpeed = 0.001; // Adjust the zoom speed (default is 1.0)
    controlsRef.current.panSpeed = 0.001; // Adjust the panning speed (default is 1.0)
    controlsRef.current.minDistance = 1.2; // Set the minimum distance for zooming
    controlsRef.current.maxDistance = 5; // Set the maximum distance for zooming
  });

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update(); // Update the OrbitControls in every frame
    }
  });

  camera.position.set(1, 1, 1);

  return <group ref={groupRef} />;
};

const Model = () => {
  return (
      <Canvas height="100%">
        <pointLight position={[5, 5, 5]} />
        <pointLight position={[-5, -5, -5]} />
        <Frog />
      </Canvas>
  );
};

export default Model;
