import { useEffect, useState } from "react";

import Map from "./components/Map";
import tw from "tailwind-styled-components";

const Confirm = () => {
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickUpCoordinates = () => {
    const pickup = "Jesús Garibay 59";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoieGxib3kzNjAiLCJhIjoiY2t2cXduenh6NGFzNDJ1cWY2OHRubDF2cyJ9.pVl9TbqrHulRvNWvz_ZdlA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      });
  };

  const getDropUpCoordinates = () => {
    const dropoff = "Metro Constitución 1917";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoieGxib3kzNjAiLCJhIjoiY2t2cXduenh6NGFzNDJ1cWY2OHRubDF2cyJ9.pVl9TbqrHulRvNWvz_ZdlA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates();
    getDropUpCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        Ride selectors confirm button
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;

const RideContainer = tw.div`
    flex-1 
`;
