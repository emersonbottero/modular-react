import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FilePlus2Icon, MapPinMinusInside } from 'lucide-react';
import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

export default function MapView() {
    const mapRef = React.useRef(null);
    let map: L.Map | null = null;

    // Helper function to get query parameters from the URL
    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);
        const lat = parseFloat(params.get('lat') || '-25.441105'); // Default to Pestana Hotel
        const lng = parseFloat(params.get('lng') || '-49.276855'); // Default to Pestana Hotel
        const zoom = parseInt(params.get('zoom') || '30', 10); // Default zoom level
        return { lat, lng, zoom };
    };


   // var newMusic = L.divIcon({html: '<svg data-v-56bd7dfc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-minus-inside-icon lucide-map-pin-minus-inside"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><path d="M9 10h6"></path></svg>', className: 'new-music'});
    var newMusic = L.divIcon({html:  ReactDOMServer.renderToString(<><MapPinMinusInside className="size-12 fill-primary stroke-accent stroke-1 *:last:hidden"/><FilePlus2Icon className='translate-x-[53%] -translate-y-[165%] stroke-accent'/></>) , className: 'new-music'});
    
    useEffect(() => {
        const { lat, lng, zoom } = getQueryParams();
        map = L.map(mapRef.current!,{
            zoomControl: false, // Disable zoom control
        }).setView([lat, lng], zoom);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }).addTo(map);


        return () => {
            map!.remove(); // Cleanup the map on unmount
        };
    }, []);

    useEffect(() => {
        var marker = L.marker([-25.441105, -49.276855],{icon: newMusic}).addTo(map!);
    },[]);

    return <div ref={mapRef} className="absolute inset-0 h-full w-full -z-1"></div>;

    
}