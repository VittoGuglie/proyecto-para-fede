// src/components/3d/Banner3D.js
import React, { useState } from 'react';
import KuulaEmbed from './KuulaEmbed.js'; // Asegúrate de que la ruta sea correcta
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Banner3D = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleHotspotClick = (hotspotId) => {
        // Actualiza el estado según el ID del hotspot
        setCurrentSlide(hotspotId);
        setIsPaneOpen(true); // Abre el panel lateral
    };

    const slidesContent = {
        // Asume que tenemos diferentes IDs para los hotspots
        'hotspot1': {
            title: 'Planos del Proyecto',
            description: 'Descripción de los planos...',
            imgSrc: '/static/planos.png' // Ruta a la imagen del plano
        },
        'hotspot2': {
            title: 'Render 3D',
            description: 'Descripción del render...',
            imgSrc: '/static/render.png' // Ruta a la imagen del render
        },
        // Puedes agregar más slides aquí
    };

    return (
        <div style={{ position: 'relative' }}>
            <KuulaEmbed onHotspotClick={handleHotspotClick} />

            <SlidingPane
                isOpen={isPaneOpen}
                title={currentSlide && slidesContent[currentSlide].title}
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

