import { useEffect, useState } from "react";

import Map from "./components/Map";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const getPickUpCoordinates = (pickup) => {
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

  const getDropUpCoordinates = (dropoff) => {
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
    getPickUpCoordinates(pickup);
    getDropUpCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ReturnButtonContainer>
        <Link passHref href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ReturnButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm button</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;

const RideContainer = tw.div`
    flex flex-1 flex-col
    h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black text-white m-4
  py-4 text-center text-xl
  cursor-pointer
`;

const ReturnButtonContainer = tw.div`
  rounded-full absolute top-4 left-4
  z-10 bg-white shadow-md
`;

const BackButton = tw.img`
  h-full
  object-contain
  p-px
  bg-gray-200
  rounded-full
  border border-white
  cursor-pointer
`;
