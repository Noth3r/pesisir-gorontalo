"use client";

import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import type { GeoJsonObject } from 'geojson';
import "leaflet/dist/leaflet.css";
import polygon from "./data.json";

export default function LeafletMaps() {
  return (
    <MapContainer
      center={[0.70118015, 122.72330950262128]}
      zoom={10}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <GeoJSON data={polygon[0]?.geojson as GeoJsonObject} />
    </MapContainer>
  );
}
