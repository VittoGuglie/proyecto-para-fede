import React from "react";
import Banner3D from '../3d/Banner3D.js';

function Home() {
    const modelUrl = 'https://kuula.co/share/collection/7Kn08?logo=1&info=1&fs=1&vr=0&zoom=1&gyro=0&thumbs=1&margin=4&alpha=0.60&keys=0 ';
    return (

        <div>
            <Banner3D modelUrl={modelUrl} />
        </div>
    );
};

export default Home;
