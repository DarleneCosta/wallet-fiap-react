import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../Contexts/Auth';
import Loading from '../Components/Loading/Loading';

const Routes = () => {
	const { signed, loading } = useContext(AuthContext);
	if (loading) {
		return <Loading />;
	}
	return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
