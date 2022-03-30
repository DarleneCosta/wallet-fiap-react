import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginController from '../Screens/Login/LoginController';
import DashboardController from '../Screens/Dashboard/DashboardController';
import Home from '../Screens/Home/Home';
import SignUpController from '../Screens/SignUp/SignUpController';

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Wallet" element={<DashboardController />} />
			<Route path="/Login" element={<LoginController />} />
			<Route path="/SignUp" element={<SignUpController />} />
		</Routes>
	);
};

export default routes;
