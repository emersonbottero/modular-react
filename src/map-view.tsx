import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';

export default function MapView() {
    const mapRef = React.useRef(null);

    // Helper function to get query parameters from the URL
    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);
        const lat = parseFloat(params.get('lat') || '-25.441105'); // Default to Pestana Hotel
        const lng = parseFloat(params.get('lng') || '-49.276855'); // Default to Pestana Hotel
        const zoom = parseInt(params.get('zoom') || '30', 10); // Default zoom level
        return { lat, lng, zoom };
    };

    useEffect(() => {
        const { lat, lng, zoom } = getQueryParams();
        const map = L.map(mapRef.current!,{
            zoomControl: false, // Disable zoom control
        }).setView([lat, lng], zoom);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }).addTo(map);

        return () => {
            map.remove(); // Cleanup the map on unmount
        };
    }, []);

    return <div ref={mapRef} className="absolute inset-0 h-full w-full -z-1"></div>;
}