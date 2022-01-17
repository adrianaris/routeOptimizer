import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

const MapContainer = styled.div`
  height: 400px;
  top: 0;
  bottom: 0;
  width: 100%;
`;
const Sidebar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`;
const Geocoder = styled.div`
  position: absolute;
  z-index: 1;
  width: 50%;
  left: 50%;
  margin-left: -10%;
  top: 380px;
`;

const Map = ({ setCurrent }) => {
  const token =
    "pk.eyJ1IjoiYWRyaWFuYXJpcyIsImEiOiJja3kzOTl0YzkwdGZuMm5xdHJzMHJ5b2p4In0.kXH2cOyOUq6WIOmYH5sKAA";
  mapboxgl.accessToken = token;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(4.5201);
  const [lat, setLat] = useState(50.8195);
  const [zoom, setZoom] = useState(11.67);

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  });

  useEffect(() => {
    if (map.current !== null) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // map.current.addControl(geocoder)
    document
      .getElementById("geocoder")
      .appendChild(geocoder.onAdd(map.current));
  }, []);

  useEffect(() => {
    if (map.current === null) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  geocoder.on("result", (event) => {
    setCurrent((state) => [...state, event.result.center]);
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </Sidebar>
      <MapContainer ref={mapContainer} />
      <Geocoder id="geocoder" />
    </div>
  );
};

export default Map;
