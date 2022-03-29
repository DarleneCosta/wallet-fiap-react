import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginController from '../Screens/Login/LoginController';
import HomeController from '../Screens/Home/HomeController';
import Home from '../Screens/NewHome/Home';

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginController />} />
			<Route path="/Wallet" element={<HomeController />} />
			<Route path="/Home" element={<Home />} />
		</Routes>
	);
};

export default routes;
