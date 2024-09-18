import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapSelector = ({ onLocationSelect }) => {
    const [position, setPosition] = useState(null);

    const fetchAddressFromCoords = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            return response.data.display_name;
        } catch (error) {
            console.error('Error fetching address:', error);
            return '';
        }
    };

    const LocationMarker = () => {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition(e.latlng);
                fetchAddressFromCoords(lat, lng).then((address) => {
                    onLocationSelect({ lat, lng, address });
                });
            }
        });

        return position === null ? null : (
            <Marker position={position}></Marker>
        );
    };

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapSelector;
