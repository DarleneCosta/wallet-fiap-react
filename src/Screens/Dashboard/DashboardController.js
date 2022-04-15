/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import balanceWallet from '../../Services/APIs/Balance/Balance';
import DashboardView from './DashboardView';
import AuthContext from '../../Contexts/Auth';

const DashboardController = () => {
	const { user, signOut } = useContext(AuthContext);

	const getPreferencesAPI = useAPI(store.getAllStorePreference);
	const getBalanceAPI = useAPI(balanceWallet.getBalance);

	useEffect(() => {		
		getBalance();
		getStorePreferences();		
	}, [user]);

	const getStorePreferences = async () => {	
		await getPreferencesAPI.request(user);		
	};
	const getBalance = async () => {
		await getBalanceAPI.request(user);
	};

	return (
	
			<DashboardView
				storesPreference={getPreferencesAPI.data}
				infoPreference={getPreferencesAPI.error}
				balanceWallet={getBalanceAPI.data}
				signOut={signOut}
			/>
	);
};

export default DashboardController;
