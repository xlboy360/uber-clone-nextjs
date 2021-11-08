import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoieGxib3kzNjAiLCJhIjoiY2t2cXduenh6NGFzNDJ1cWY2OHRubDF2cyJ9.pVl9TbqrHulRvNWvz_ZdlA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [-99.12766, 19.42847],
      zoom: 9,
    });
  }, []);
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 
`;