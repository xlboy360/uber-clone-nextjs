import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <Title>Log in to access your account</Title>
      <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200
    p-4 
`;

const UberLogo = tw.img`
    h-20 w-auto object-container
    self-start flex-1
`;

const HeadImg = tw.img`
    object-contain w-full
    flex-3
`;

const Title = tw.div`
    text-4xl pt-4 text-gray-500
    flex-1
`;

const SignInButton = tw.button`
    bg-black text-white
    text-center py-4 mt-8
    self-center w-full
    flex-1/2
`;
