import React, { useContext, useEffect } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import balanceWallet from '../../Services/APIs/Balance/Balance';
import DashboardView from './DashboardView';
import LoadingOverlay from 'react-loading-overlay';
import AuthContext from '../../Contexts/Auth';

const DashboardController = () => {
	const { user, signOut } = useContext(AuthContext);

	const getPreferencesAPI = useAPI(store.getAllStorePreference);
	const getBalanceAPI = useAPI(balanceWallet.getBalance);

	// function getBalanceWallet() {
	// 	return new Promise(() => {
	// 		getBalanceGetAPI
	// 			.requestPromise()
	// 			.then((info) => {
	// 				console.log(info);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	});
	// }

	useEffect(() => {
		getBalance();
		getStorePreferences();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const getStorePreferences = async () => {	
		await getPreferencesAPI.request(user);		
	};
	const getBalance = async () => {
		await getBalanceAPI.request(user);
	};

	return (
		<LoadingOverlay
			active={!!getPreferencesAPI.loading}
			spinner
			text="Carregando..."
		>
			<DashboardView
				storePreference={getPreferencesAPI.data}
				infoPreference={getPreferencesAPI.error}
				balanceWallet={getBalanceAPI.data}
				signOut={signOut}
			/>
		</LoadingOverlay>
	);
};

export default DashboardController;
