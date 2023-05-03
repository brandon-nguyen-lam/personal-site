import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Frog = () => {
    const groupRef = useRef();

    // Load the materials for the model
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/frog.mtl', (materials) => {
        // Set the base path for the textures
        materials.preload();
        materials.baseUrl = '';

        // Load the geometry for the model
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('frog.obj', (object) => {
            // Set the texture for the model
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('/frog.png');
            object.traverse((child) => {
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
            groupRef.current.scale.set(5, 5, 5);
        }
    });

    const { camera } = useThree();
    camera.position.set(1, 2, 8);
    return <group ref={groupRef} />;
};

const Model = () => {
    return (
        <Canvas height="100%">
            <pointLight position={[10, 10, 10]} />
            <Frog />
        </Canvas>
    );
};

export default Model;
