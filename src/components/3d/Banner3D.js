// src/components/3d/Banner3D.js
import React, { useState } from 'react';
import KuulaEmbed from './KuulaEmbed'; 
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// Importa los datos de los slides desde un archivo separado si es necesario
import slidesContent from '../../data/slidesContent'; // Ejemplo de importación de configuración

const Banner3D = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleHotspotClick = (hotspotId) => {
        // Actualiza el estado según el ID del hotspot
        if (slidesContent[hotspotId]) {
            setCurrentSlide(hotspotId);
            setIsPaneOpen(true); // Abre el panel lateral
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <KuulaEmbed onHotspotClick={handleHotspotClick} />

            <SlidingPane
                isOpen={isPaneOpen}
                title={currentSlide ? slidesContent[currentSlide].title : ''}
                onRequestClose={() => setIsPaneOpen(false)}
                from="right"
                width="400px"
            >
                {currentSlide && (
                    <div>
                        <h2>{slidesContent[currentSlide].title}</h2>
                        <p>{slidesContent[currentSlide].description}</p>
                        <img
                            src={slidesContent[currentSlide].imgSrc}
                            alt={slidesContent[currentSlide].title}
                            style={{ width: '100%' }}
                        />
                    </div>
                )}
            </SlidingPane>
        </div>
    );
};

export default Banner3D;