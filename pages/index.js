import { useEffect, useState } from "react";

import tw from "tailwind-styled-components";

import Map from "./components/map";
import Link from "next/link";

import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import router, { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <ProfileContainer>
            <Name>{user && user.name}</Name>
            <UserImg src={user && user.photoUrl} onClick={() => signOut(auth)} />
          </ProfileContainer>
        </Header>
        <ActionButtonsContainer>
          <Link passHref href="/search">
            <ActionButton>
              <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtonsContainer>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-24
`;

const ProfileContainer = tw.div`
  flex items-center
`;
const Name = tw.div`
  mr-4 w-25 text-sm
`;

const UserImg = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
  cursor-pointer
`;

const ActionButtonsContainer = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 
  items-center justify-center rounded-lg
  transform hover:scale-105 transition text-xl
  cursor-pointer
`;
const ActionButtonImg = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  flex h-20 bg-gray-200 text-lg 
  rounded-lg p-4 items-center
  m-1 mt-8
`;
