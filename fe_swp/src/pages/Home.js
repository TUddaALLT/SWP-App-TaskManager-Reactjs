import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Login from "./Login";
import Navigation from "../components/Navigation";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <>
      <div className="main-content">
        <NavBar />
        <Navigation />

        <Routes>
          {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          {/* <Route path='/cart' element={<Cart />} />
        <Route path='/buy/:id/*' element={<Buy />} />
        <Route path='/order/:totalPrice' element={<Order />} />  */}
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Home;
