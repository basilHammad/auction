import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import AboutUs from "../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <AboutUs />
    </Layout>
  );
};

export default Home;
