import React from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginController from '../Screens/Login/LoginController'

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
    </Routes>
  );
};

export default routes