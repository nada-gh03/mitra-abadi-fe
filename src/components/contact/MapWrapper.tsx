"use client";

import React, { useEffect, useState, memo } from "react";

const POSITION: [number, number] = [-6.318152, 106.537024];

const MapWrapper = () => {
  const [MapComponents, setMapComponents] = useState<any>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const L = await import("leaflet");
        const { MapContainer, TileLayer, Marker, Popup } =
          await import("react-leaflet");

        const customIcon = L.divIcon({
          className: "custom-marker",
          html: `<div class="relative flex flex-col items-center justify-center">
                   <span class="material-symbols-outlined text-primary drop-shadow-xl" style="font-size: 48px;">
                     location_on
                   </span>
                   <div class="w-4 h-1.5 bg-black/30 rounded-full blur-[2px] mt-[-10px]"></div>
                 </div>`,
          iconSize: [48, 48],
          iconAnchor: [24, 48],
          popupAnchor: [0, -48],
        });

        setMapComponents({
          MapContainer,
          TileLayer,
          Marker,
          Popup,
          customIcon,
        });
      } catch (err) {
        console.error("Map initialization failed:", err);
      }
    };

    loadMap();
  }, []);

  if (!MapComponents) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400 text-sm animate-pulse uppercase tracking-widest">
          Initializing Map...
        </p>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, customIcon } = MapComponents;

  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <Marker position={POSITION} icon={customIcon}>
        <Popup className="custom-popup">
          <div className="flex flex-col gap-1 p-1">
            <span className="font-bold text-navy">
              PT Mitra Abadi Group
            </span>
            <span className="text-xs text-gray-500">Pabrik & Kantor Utama</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(MapWrapper);
