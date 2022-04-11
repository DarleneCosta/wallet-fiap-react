import React from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import storePreference from '../../Services/APIs/Store/Store';
import balanceWallet from '../../Services/APIs/Balance/Balance';
import DashboardView from './DashboardView';
import LoadingOverlay from 'react-loading-overlay';

const DashboardController = () => {
	const storagedSession = JSON.parse(localStorage.getItem('@wallet:session'));
	const cpf = storagedSession.cpf;
	const getStoreGetAPI = useAPI(storePreference.getAllStore(cpf));
	const getBalanceGetAPI = useAPI(balanceWallet.getBalance(cpf));

	function getStorePreferences() {
		return new Promise(() => {
			getStoreGetAPI
				.requestPromise()
				.then((info) => {
					console.log(info);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	function getBalanceWallet() {
		return new Promise(() => {
			getBalanceGetAPI
				.requestPromise()
				.then((info) => {
					console.log(info);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	if (cpf) {
		getStorePreferences();
		getBalanceWallet();
	}
	return (
		<LoadingOverlay
			active={!!getStoreGetAPI.loading}
			spinner
			text="Carregando..."
		>
			<DashboardView
				storePreference={getStoreGetAPI.data}
				infoPreference={getStoreGetAPI.error}
			/>
		</LoadingOverlay>
	);
};

export default DashboardController;
