import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginController from '../Screens/Login/LoginController'
import HomeController from '../Screens/Home2/HomeController'
import Home from '../Screens/Home/Home'

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="/Wallet" element={<HomeController />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default routes