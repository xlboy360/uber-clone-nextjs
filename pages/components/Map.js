import { useEffect } from "react";

import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamVhbmMyMDIxIiwiYSI6ImNrdnF3bzRzZjRhcGYydG51c2J2Yzl4MHcifQ.dzkZo35-aV5QIHbeOOy-nw";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: [-99.0865813203, 19.4025167233],
      zoom: 11,
    });
    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }
    if (props.pickUpCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropOffCoordinates], {
        padding: 40,
      });
    }
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
