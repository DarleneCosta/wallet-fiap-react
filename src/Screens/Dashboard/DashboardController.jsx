import React from 'react';
import Auth from '../../Services/APIs/Auth/Auth';
import DashboardView from './DashboardView';

const DashboardController = () => {
	const userIsLogged = Auth.isLoggedIn();

	return <DashboardView userIsLogged={userIsLogged} />;
};

export default DashboardController;
