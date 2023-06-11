import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import hotelIcon from '../compontnts/img/resort.png'; // Replace with the path to your hotel icon image

// Create a custom hotel icon
const customHotelIcon = L.icon({
  iconUrl: hotelIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MapHome = () => {
  const position = [11.9367, 79.8304]; // Promenade Beach latitude and longitude

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position} icon={customHotelIcon}>
        <Popup>GROVERT</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapHome;
