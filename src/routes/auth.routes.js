import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardController from '../Screens/Dashboard/DashboardController';

const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/*" element={<DashboardController />} />
		</Routes>
	);
};

export default AuthRoutes;
