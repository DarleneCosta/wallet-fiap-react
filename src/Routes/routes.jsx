import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../Screens/SignIn/SignInController';
import Home from '../Screens/Home/HomeController';
import SignUp from '../Screens/SignUp/SignUpController';
import DashboardController from '../Screens/Dashboard/DashboardController';

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
