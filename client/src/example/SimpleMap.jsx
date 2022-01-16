import turf from "turf";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { REACT_APP_MAPBOX_API } from "../utils/config";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "axios";

mapboxgl.accessToken = REACT_APP_MAPBOX_API;
const CENTER_INIT = [10.019393, 45.140938];
const ZOOM_INIT = 14;

// function Map({ setCurrent, current }) {
function Map() {
  const [current, setCurrent] = useState({});
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");

  const mapRef = useRef(null);
  const centerRef = useRef(null);
  const geocoderRef = useRef(null);

  // route sources
  const addresses = turf.featureCollection([]);
  let route = turf.featureCollection([]);

  // mapbox utilities
  const map = useRef(null);
  const geocoder = new MapboxGeocoder({
    mapboxgl,
    accessToken: mapboxgl.accessToken,
  });

  function createMapLayers() {
    geocoderRef.current.appendChild(geocoder.onAdd(map.current));

    // pin the center point
    new mapboxgl.Marker(centerRef.current)
      .setLngLat(CENTER_INIT)
      .addTo(map.current);
    centerRef.current.classList = ["truck"];

    // create a point map for path
    map.current.addLayer({
      id: "dropoffs-symbol",
      type: "symbol",
      source: {
        data: addresses,
        type: "geojson",
      },
      layout: {
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-image": "marker-15",
      },
    });

    map.current.addSource("route", {
      type: "geojson",
      data: route,
    });

    map.current.addLayer(
      {
        id: "routeline-active",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": ["interpolate", ["linear"], ["zoom"], 12, 3, 22, 12],
        },
      },
      "waterway-label"
    );

    map.current.addLayer(
      {
        id: "routearrows",
        type: "symbol",
        source: "route",
        layout: {
          "symbol-placement": "line",
          "text-field": "▶",
          "text-size": ["interpolate", ["linear"], ["zoom"], 12, 24, 22, 60],
          "symbol-spacing": [
            "interpolate",
            ["linear"],
            ["zoom"],
            12,
            30,
            22,
            160,
          ],
          "text-keep-upright": false,
        },
        paint: {
          "text-color": "#3887be",
          "text-halo-color": "hsl(55, 11%, 96%)",
          "text-halo-width": 3,
        },
      },
      "waterway-label"
    );
  }

  // this is the same addAddress but using pinning
  // I comment this out since we're not using this,
  // but keep it for future reference
  // eslint-disable-next-line no-unused-vars
  function addAddressByPin(e) {
    // e.point = {x: lng, y: lat};
    // map.current.unproject(e.point) = {lng, lat}
    const { lng, lat } = map.current.unproject(e.point);
    const point = turf.point([lng, lat]);
    addresses.features.push(point);
    map.current.getSource("dropoffs-symbol").setData(addresses);
  }

  function addAddressBySearch(coordinates) {
    // coordinates = { center, id, place_name, ...more }
    setCurrent((state) => ({ ...state, [coordinates.id]: coordinates }));
    const point = turf.point(coordinates.center);
    addresses.features.push({ point, id: coordinates.id });
    map.current.getSource("dropoffs-symbol").setData(addresses);
  }

  async function optimize() {
    const coordinates = Object.values(current).map(({ center }) =>
      center.join(",")
    );

    const { data } = await axios.get(
      `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates.join(
        ";"
      )}?overview=full&steps=true&geometries=geojson&source=first&destination=last&roundtrip=false&access_token=${
        mapboxgl.accessToken
      }`
    );

    if (data.code !== "Ok") {
      console.log("Error");
      return;
    }

    // the location is reversed bacause
    // in Google maps the coordinates are reversed
    const waypoints = data.waypoints
      .sort((a, b) => a.waypoint_index - b.waypoint_index)
      .map(({ location }) => location[1] + "," + location[0]);

    setGoogleMapsUrl(
      `https://www.google.com/maps/dir/?api=1&waypoints=${encodeURI(
        waypoints.join("|")
      )}`
    );

    const routeGeoJSON = turf.featureCollection([
      turf.feature(data.trips[0].geometry),
    ]);

    map.current?.getSource("route").setData(routeGeoJSON);
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: CENTER_INIT,
      zoom: ZOOM_INIT,
    });
    map.current.on("load", createMapLayers);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  geocoder.on("result", (e) => addAddressBySearch(e.result));

  // map.current.on("click", addAddressByPin);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1em" }}>
      <div
        style={{
          position: "relative",
          width: "60%",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
          ref={mapRef}
        />
        <div
          ref={centerRef}
          style={{
            width: "20px",
            height: "20px",
            border: "2px solid #fff",
            borderRadius: "50%",
            background: "#3887be",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            height: "100px",
          }}
          ref={geocoderRef}
        />
      </div>
      <div>
        <ul>
          {Object.values(current).map(({ id, place_name }) => (
            <li key={id}>
              <p>{place_name}</p>
              <button
                onClick={() => {
                  const updatedKeys = Object.keys(current).filter(
                    (key) => key !== id
                  );
                  const newCurrent = {};
                  for (const key of updatedKeys) newCurrent[key] = current[key];
                  setCurrent(newCurrent);
                  addresses.features = addresses.features.filter(
                    (address) => address.id !== id
                  );
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button onClick={optimize}>optimize</button>
        <button>
          <a href={googleMapsUrl}>open in maps</a>
        </button>
      </div>
    </div>
  );
}

export default Map;
