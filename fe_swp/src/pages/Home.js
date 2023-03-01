import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <>
      <div
        className='main-content'
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <Header></Header>
        <Navigation />
        <div style={{ backgroundColor: "#D9D9D9", height: "92vh" }}>xx</div>
      </div>
    </>
  );
};

export default Home;
