import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../Screens/SignIn/SignInController';
import Dashboard from '../Screens/Dashboard/DashboardController';
import Home from '../Screens/Home/HomeController';
import SignUp from '../Screens/SignUp/SignUpController';

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Wallet" element={<Dashboard />} />
			<Route path="/Login" element={<SignIn />} />
			<Route path="/SignUp" element={<SignUp />} />
		</Routes>
	);
};

export default routes;
