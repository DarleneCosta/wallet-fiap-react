import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home/HomeController';
import SignIn from '../screens/SignIn/SignInController';
import SignUp from '../screens/SignUp/SignUpController';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SignUp" element={<SignUp />} />
			<Route path="/SignIn" element={<SignIn />} />
		</Routes>
	);
};

export default AppRoutes;
