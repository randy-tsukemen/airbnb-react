import { useState } from "react";
import ReactMapGL from "react-map-gl";
const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 35.660833,
    longitude: 139.766944,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_mapStyle}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_mapboxApiAccessToken}
      {...viewport}
    ></ReactMapGL>
  );
};

export default Map;
