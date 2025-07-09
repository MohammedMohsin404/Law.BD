import React from "react";
import Banner from "../../Components/Banner";
import Services from "../../Components/Services";
import Lawyers from "../../Components/Lawyers";
import { useLoaderData } from "react-router";


const Home = () => {

    const lawyers = useLoaderData();
  return (
    <>
      <Banner />

      <Lawyers data={lawyers} />
      <Services />
    </>
  );
};

export default Home;
