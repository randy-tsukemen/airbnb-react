import { useState } from "react";
import ReactMapGL from "react-map-gl";
const Map = ({ searchResults }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 35.660833,
    longitude: 139.766944,
    zoom: 14,
  });

  // Transform the searchResults into { latitude: 52.516272, longitude: 13.377722} object
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  console.log(coordinates);

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_mapStyle}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_mapboxApiAccessToken}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    ></ReactMapGL>
  );
};

export default Map;
