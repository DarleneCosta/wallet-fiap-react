import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Screens/Home/HomeController';
import SignIn from '../Screens/SignIn/SignInController';
import SignUp from '../Screens/SignUp/SignUpController';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/SignUp" element={<SignUp />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/*" element={<Home />} />
		</Routes>
	);
};

export default AppRoutes;
