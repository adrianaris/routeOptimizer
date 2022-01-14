import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { REACT_APP_MAPBOX_API } from "../utils/config";
import turf from "turf";

const CENTER_INIT = [10.019393, 45.140938];
const OTHER_INIT = [10.035786, 45.135729];
const ZOOM_INIT = 12;

mapboxgl.accessToken = REACT_APP_MAPBOX_API;
function Map({ setCurrent }) {
  const lastAtRestaurant = 0;
  let keepTrack = [];
  const pointHopper = {};
  const warehouse = turf.featureCollection([turf.point(OTHER_INIT)]);
  const dropoffs = turf.featureCollection([]);
  const nothing = turf.featureCollection([]);

  const map = useRef(null);
  const geoCoderContainer = useRef(null);
  const mapContainer = useRef(null);

  const geoCoder = new MapboxGeocoder({
    mapboxgl,
    accessToken: mapboxgl.accessToken,
  });

  useEffect(() => {
    console.log("Called");
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: CENTER_INIT,
      zoom: ZOOM_INIT,
    });

    map.current.on("load", async () => {
      geoCoderContainer.current.appendChild(geoCoder.onAdd(map.current));

      const marker = document.createElement("div");
      marker.classList = "truck";

      // Create a new marker
      new mapboxgl.Marker(marker).setLngLat(CENTER_INIT).addTo(map.current);

      map.current.addLayer({
        id: "warehouse",
        type: "circle",
        source: {
          data: warehouse,
          type: "geojson",
        },
        paint: {
          "circle-radius": 20,
          "circle-color": "white",
          "circle-stroke-color": "#3887be",
          "circle-stroke-width": 3,
        },
      });

      // Create a symbol layer on top of circle layer
      map.current.addLayer({
        id: "warehouse-symbol",
        type: "symbol",
        source: {
          data: warehouse,
          type: "geojson",
        },
        layout: {
          "icon-image": "grocery-15",
          "icon-size": 1,
        },
        paint: {
          "text-color": "#3887be",
        },
      });

      map.current.addLayer({
        id: "dropoffs-symbol",
        type: "symbol",
        source: {
          data: dropoffs,
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
        data: nothing,
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

      // Listen for a click on the map
      await map.current.on("click", addWaypoints);
      geoCoder.on("result", async (e) => {
        console.log(e.result.center);
        await addWaypointsFromSearch(e.result.center);
        setCurrent((state) => [...state, e.result.center]);
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function addWaypoints(event) {
    console.log(event.point);
    // When the map is clicked, add a new drop off point
    // and update the `dropoffs-symbol` layer
    await newDropoff(map.current.unproject(event.point));
    updateDropoffs(dropoffs);
  }

  async function addWaypointsFromSearch(coordinate) {
    // When the map is clicked, add a new drop off point
    // and update the `dropoffs-symbol` layer
    const [lng, lat] = coordinate;
    await newDropoff({ lng, lat });
    updateDropoffs(dropoffs);
  }

  async function newDropoff(coordinates) {
    // Store the clicked point as a new GeoJSON feature with
    // two properties: `orderTime` and `key`
    const pt = turf.point([coordinates.lng, coordinates.lat], {
      orderTime: Date.now(),
      key: Math.random(),
    });
    dropoffs.features.push(pt);
    pointHopper[pt.properties.key] = pt;

    // Make a request to the Optimization API
    const query = await fetch(assembleQueryURL(), { method: "GET" });
    const response = await query.json();

    // Create an alert for any requests that return an error
    if (response.code !== "Ok") {
      const handleMessage =
        response.code === "InvalidInput"
          ? "Refresh to start a new route. For more information: https://docs.mapbox.com/api/navigation/optimization/#optimization-api-errors"
          : "Try a different point.";
      alert(`${response.code} - ${response.message}\n\n${handleMessage}`);
      // Remove invalid point
      dropoffs.features.pop();
      delete pointHopper[pt.properties.key];
      return;
    }

    // Create a GeoJSON feature collection
    const routeGeoJSON = turf.featureCollection([
      turf.feature(response.trips[0].geometry),
    ]);

    // Update the `route` source by getting the route source
    // and setting the data equal to routeGeoJSON
    map.current.getSource("route").setData(routeGeoJSON);
  }

  function updateDropoffs(geojson) {
    map.current.getSource("dropoffs-symbol").setData(geojson);
  }

  // Here you'll specify all the parameters necessary for requesting a response from the Optimization API
  function assembleQueryURL() {
    // Store the location of the truck in a variable called coordinates
    const coordinates = [CENTER_INIT];
    const distributions = [];
    let restaurantIndex;
    keepTrack = [CENTER_INIT];

    // Create an array of GeoJSON feature collections for each point
    const restJobs = Object.keys(pointHopper).map((key) => pointHopper[key]);

    // If there are actually orders from this restaurant
    if (restJobs.length > 0) {
      // Check to see if the request was made after visiting the restaurant
      const needToPickUp =
        restJobs.filter((d) => d.properties.orderTime > lastAtRestaurant)
          .length > 0;

      // If the request was made after picking up from the restaurant,
      // Add the restaurant as an additional stop
      if (needToPickUp) {
        restaurantIndex = coordinates.length;
        // Add the restaurant as a coordinate
        coordinates.push(OTHER_INIT);
        // push the restaurant itself into the array
        keepTrack.push(pointHopper.warehouse);
      }

      for (const job of restJobs) {
        // Add dropoff to list
        keepTrack.push(job);
        coordinates.push(job.geometry.coordinates);
        // if order not yet picked up, add a reroute
        if (needToPickUp && job.properties.orderTime > lastAtRestaurant) {
          distributions.push(`${restaurantIndex},${coordinates.length - 1}`);
        }
      }
    }

    // Set the profile to `driving`
    // Coordinates will include the current location of the truck,
    return `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates.join(
      ";"
    )}?distributions=${distributions.join(
      ";"
    )}&overview=full&steps=true&geometries=geojson&source=first&access_token=${
      mapboxgl.accessToken
    }`;
  }

  return (
    <div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "60%",
        }}
        ref={mapContainer}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          height: "100px",
        }}
        ref={geoCoderContainer}
      ></div>
    </div>
  );
}

export default Map;
