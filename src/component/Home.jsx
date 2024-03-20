import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const authInfo = useContext(AuthContext);

  return <div>
    <h1>My Name is: {authInfo.name}</h1>
  </div>;
};

export default Home;
