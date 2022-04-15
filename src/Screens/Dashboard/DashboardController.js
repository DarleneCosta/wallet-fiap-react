/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import balanceWallet from '../../Services/APIs/Balance/Balance';
import DashboardView from './DashboardView';
import AuthContext from '../../Contexts/Auth';
import LoadingOverlay from 'react-loading-overlay';

const DashboardController = () => {
	const { user, signOut } = useContext(AuthContext);

	const deletePreferenceAPI = useAPI(store.deleteStorePreference);
	const getPreferencesAPI = useAPI(store.getAllStorePreference);
	const getBalanceAPI = useAPI(balanceWallet.getBalance);
	const getStoreAPI = useAPI(store.getAllStore);

	const [idRemove, setIdRemove] = useState(null);
	const [reloadPreferences, setReloadPreferences] = useState(false);

	useEffect(() => {
		getStore();
		getBalance();
		getStorePreferences();
	}, [reloadPreferences]);

	useEffect(() => {
		deletePreference();
	}, [idRemove]);

	const getStorePreferences = async () => {
		await getPreferencesAPI.request(user);
	};
	const getBalance = async () => {
		await getBalanceAPI.request(user);
	};
	const getStore = async () => {
		await getStoreAPI.request();
	};
	const deletePreference = async () => {
		if (idRemove) {
			await deletePreferenceAPI.request(user, idRemove);
			await getStorePreferences();
		}
	};

	return (
		<LoadingOverlay
			active={!!getBalanceAPI.loading || !!getPreferencesAPI.loading}
			spinner
			text="Aguarde..."
			className="h-full"
		>
			<DashboardView
				stores={getStoreAPI.data}
				storesPreference={getPreferencesAPI.data}
				infoPreference={getPreferencesAPI.error}
				balanceWallet={getBalanceAPI.data}
				signOut={signOut}
				setIdRemove={setIdRemove}
				setReloadPreferences={setReloadPreferences}
			/>
		</LoadingOverlay>
	);
};

export default DashboardController;
