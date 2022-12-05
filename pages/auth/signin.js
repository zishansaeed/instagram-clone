import React from "react";
import { getProviders, signIn as SignInProviders } from "next-auth/react";

const signIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignInProviders(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps(props) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
