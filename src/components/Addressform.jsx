import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationSelector = ({ setCoords, setSelectedLocation }) => {
    useMapEvents({
        async click(e) {
            const { lat, lng } = e.latlng;
            setCoords({ latitude: lat, longitude: lng });
            try {
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
                );
                const readableLocation = response.data.display_name;
                setSelectedLocation(readableLocation);
            } catch (error) {
                console.error('Error fetching location name:', error);
                setSelectedLocation(`Lat: ${lat}, Lng: ${lng}`);
            }
        },
    });
    return null;
};

const AddressForm = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [town, setTown] = useState('');
    const [detailedLocation, setDetailedLocation] = useState('');
    const [coords, setCoords] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        if (name === 'country') {
            setCountry(value);
        } else if (name === 'city') {
            setCity(value);
        } else if (name === 'town') {
            setTown(value);
        } else if (name === 'detailedLocation') {
            setDetailedLocation(value);
        }
    };

    const fetchCoordinates = async () => {
        const fullAddress = `${detailedLocation}, ${town}, ${city}, ${country}`;
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(fullAddress)}&format=json`
            );
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setCoords({ latitude: lat, longitude: lon });
            } else {
                alert('Address not found');
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCoordinates();
    };

    const handleOrderConfirm = () => {
        alert('Order confirmed with location: ' + selectedLocation);
    };

    return (
        <div className="flex flex-col w-full mt-5 ml-10 lg:ml-20 lg:mb-8 lg:h-[32rem] lg:flex-row">
            {/* Form Section */}
            <div className="w-full p-5 overflow-auto bg-gray-100 rounded-lg shadow-lg lg:w-1/3">
                <h2 className="mb-6 text-2xl font-bold text-center">Address Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={country}
                            onChange={handleAddressChange}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={handleAddressChange}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="town" className="block text-sm font-medium text-gray-700">Town:</label>
                        <input
                            type="text"
                            id="town"
                            name="town"
                            value={town}
                            onChange={handleAddressChange}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="detailedLocation" className="block text-sm font-medium text-gray-700">Detailed Location (Street, House No.):</label>
                        <input
                            type="text"
                            id="detailedLocation"
                            name="detailedLocation"
                            value={detailedLocation}
                            onChange={handleAddressChange}
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Final Address */}
                    {selectedLocation && (
                        <div className="mt-4">
                            <label htmlFor="selectedLocation" className="block text-sm font-medium text-gray-700">Final Address:</label>
                            <input
                                type="text"
                                id="selectedLocation"
                                name="selectedLocation"
                                value={selectedLocation}
                                readOnly
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            />
                        </div>
                    )}

                    {/* Button to Get Coordinates */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Choose From Map
                    </button>
                </form>

                {/* Confirm Order Button */}
                {(detailedLocation || selectedLocation) && (
                    <button
                        onClick={handleOrderConfirm}
                        className="w-full px-4 py-2 mt-4 font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Confirm Order
                    </button>
                )}
            </div>

            {/* Map Section */}
            <div className="w-full mt-6 shadow-lg lg:mt-0 h-96 lg:h-full lg:w-2/3">
                {coords && (
                    <MapContainer 
                        center={[coords.latitude, coords.longitude]} 
                        zoom={13} 
                        style={{ height: "100%", width: "100%" }}
                        className="rounded-lg"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[coords.latitude, coords.longitude]}></Marker>
                        <LocationSelector setCoords={setCoords} setSelectedLocation={setSelectedLocation} />
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default AddressForm;
