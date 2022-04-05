import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../screens/SignIn/SignInController';
import Home from '../screens/Home/HomeController';
import SignUp from '../screens/SignUp/SignUpController';
import DashboardController from '../screens/Dashboard/DashboardController';

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SignUp" element={<SignUp />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/Wallet" element={<DashboardController />} />
		</Routes>
	);
};

export default routes;
