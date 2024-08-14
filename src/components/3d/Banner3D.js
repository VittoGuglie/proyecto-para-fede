import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';

function Banner3D() {
    const mesh = useRef();

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <mesh
                ref={mesh}
                rotation={[0, 45, 0]}
            >
                <boxGeometry args={[3, 2, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    );
}

export default Banner3D;
