import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginController from '../Screens/Login/LoginController'
import HomeController from '../Screens/Home/HomeController'

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="/Home" element={<HomeController />} />
    </Routes>
  );
};

export default routes