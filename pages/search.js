import { useEffect } from "react";

import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  return (
    <Wrapper>
      {/* Button container */}
      <ButtonContainer>
        <Link passHref href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      {/* Input container */}

      <InputContainer>
        <FromToIcons>
          <CircleIcon src="https://img.icons8.com/ios-filled/9CA3AF/filled-circle.png" />
          <LineIcon src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <SquareIcon src="https://img.icons8.com/ios-filled/50/000000/square-spinner.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pick up location" />
          <Input placeholder="Where to ?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      {/* Saved places */}
      <SavedPlacesContainer>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star" />
        Saved places
      </SavedPlacesContainer>
      {/* Confirm location */}
      <ConfirmLocationContainer>
        <Link
          passHref
          href={{
            pathname: "/confirm",
            query: {
              pickup: "",
              dropoff: "",
            },
          }}
        >
          <ConfirmLocationButton>Confirm location</ConfirmLocationButton>
        </Link>
      </ConfirmLocationContainer>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
    bg-white h-10 px-4
`;

const BackButton = tw.img`
    h-12 cursor-pointer
`;

const InputContainer = tw.div`
    flex bg-white items-center px-4 
    mb-2
`;

const FromToIcons = tw.div`
    w-10 flex flex-col items-center 
    justify-center mr-2
`;

const CircleIcon = tw.img`
    h-2.5
`;

const LineIcon = tw.img`
    h-10
`;

const SquareIcon = tw.img`
    h-3
`;

const InputBoxes = tw.div`
    flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2
    outline-none border-none
`;

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlacesContainer = tw.div`
    flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLocationContainer = tw.div`
    flex p-3 items-center
`;

const ConfirmLocationButton = tw.button`
    bg-black text-white p-2 flex-1 
    rounded-2 text-2xl
`;
