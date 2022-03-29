import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginController from '../Screens/Login/LoginController';
import HomeController from '../Screens/Home/HomeController';
import Home from '../Screens/NewHome/Home';
import SignUpController from '../Screens/SignUp/SignUpController';

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Wallet" element={<HomeController />} />
			<Route path="/Login" element={<LoginController />} />
			<Route path="/SignUp" element={<SignUpController />} />
		</Routes>
	);
};

export default routes;
