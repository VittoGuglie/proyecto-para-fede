import React, { useEffect } from 'react';

const KuulaEmbed = ({ onHotspotClick }) => {

    useEffect(() => {
        const handleHotspotClick = (event) => {
            const hotspotId = event.detail.id;
            onHotspotClick(hotspotId);
        };

        // Añadir un listener para capturar los clics en los hotspots
        window.addEventListener('kuula-hotspot-click', handleHotspotClick);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('kuula-hotspot-click', handleHotspotClick);
        };
    }, [onHotspotClick]);

    return (
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
                src="https://kuula.co/share/collection/7Kn08?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&chromeless=1"
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    border: 0
                }}
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                title="360 Tour"
            ></iframe>
        </div>
    );
};

export default KuulaEmbed;
