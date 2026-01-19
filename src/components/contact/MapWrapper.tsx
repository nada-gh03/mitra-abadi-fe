"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const POSITION: [number, number] = [-6.318152, 106.537024];

const MapWrapper = () => {
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="relative flex flex-col items-center justify-center">
             <span class="material-symbols-outlined text-primary text-5xl drop-shadow-xl" style="font-size: 48px;">
               location_on
             </span>
             <div class="w-4 h-1.5 bg-black/30 rounded-full blur-[2px] mt-[-10px]"></div>
           </div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
      style={{ background: "#f0f0f0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <Marker position={POSITION} icon={customIcon}>
        <Popup className="custom-popup font-sans text-sm">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-navy">
              PT Mitra Abadi Sinar Selaras
            </span>
            <span className="text-xs text-gray-600">Pabrik & Kantor Utama</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWrapper;
