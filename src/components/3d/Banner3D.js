import React, { useState } from 'react';
import KuulaEmbed from './KuulaEmbed'; // Asegúrate de que KuulaEmbed maneja correctamente los hotspots
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import slidesContent from '../../public/static/data/slidesContent.JSON';

const Banner3D = () => {
    const kuulaTourID = "7Kn08";

    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleHotspotClick = (hotspotId) => {
        if (slidesContent[hotspotId]) {
            setCurrentSlide(hotspotId);
            setIsPaneOpen(true);
        }
    };

    return (
        <div>
            <script src="https://static.kuula.io/embed.js" data-kuula={`https://kuula.co/share/collection/${kuulaTourID}?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1`} data-width="100%" data-height="640px"></script>
            
            <KuulaEmbed onHotspotClick={handleHotspotClick} />

            <SlidingPane
                isOpen={isPaneOpen}
                title={currentSlide ? slidesContent[currentSlide].title : ''}
                onRequestClose={() => setIsPaneOpen(false)}
                from="right"
                width="400px"
            >
                {currentSlide && ( // Renderiza el contenido del panel solo si hay un slide seleccionado
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