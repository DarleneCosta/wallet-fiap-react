import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardController from '../screens/Dashboard/DashboardController';

  const AuthRoutes = () => {
		return (
			<Routes>			
				<Route path="/Wallet" element={<DashboardController />} />
			</Routes>
		);
  };

  export default AuthRoutes;
