import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
const Map = ({ searchResults }) => {
  // Transform the searchResults into { latitude: 52.516272, longitude: 13.377722} object
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  console.log(coordinates);

  const center = getCenter(coordinates);
  console.log(center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_mapStyle}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_mapboxApiAccessToken}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="cursor-pointer text-2xl animate-bounce">🎃</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
