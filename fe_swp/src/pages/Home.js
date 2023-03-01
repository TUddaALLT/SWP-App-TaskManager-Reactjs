import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Navigation from "../components/Navigation";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <>
      <div className="main-content">
        <NavBar />
        <Navigation />
      </div>
    </>
  );
};

export default Home;
