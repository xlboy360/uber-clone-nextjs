import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

import { carList } from "../data/carList";

const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/
      ${pickUpCoordinates[0]},${pickUpCoordinates[1]};
      ${dropOffCoordinates[0]},${dropOffCoordinates[1]}
        ?access_token=pk.eyJ1IjoiamVhbmMyMDIxIiwiYSI6ImNrdnF3bzRzZjRhcGYydG51c2J2Yzl4MHcifQ.dzkZo35-aV5QIHbeOOy-nw`)
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
  }, [pickUpCoordinates, dropOffCoordinates]);
  console.log(pickUpCoordinates, dropOffCoordinates);

  return (
    <Wrapper>
      <SelectorTitle>Choose a ride or swipe up for more</SelectorTitle>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <CarPrice>${(rideDuration * car.multiplier).toFixed(2)}</CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1 flex flex-col
    overflow-y-scroll
`;
const SelectorTitle = tw.div`
    text-center text-xs 
    text-gray-500 py-2
    border-b
`;

const CarList = tw.div`
    overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const CarPrice = tw.div`
    text-sm font-medium
`;
