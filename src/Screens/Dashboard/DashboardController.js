import React, { useState, useEffect } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import storePreference from '../../Services/APIs/Store/Store';
import DashboardView from './DashboardView';
import LoadingOverlay from 'react-loading-overlay';

const DashboardController = () => {
	const [cpf, setCpf] = useState('');
	const getStoreGetAPI = useAPI(storePreference.getAllStore(cpf));

	useEffect(() => {
		debugger;
		const storagedSession = JSON.parse(
			localStorage.getItem('@wallet:session')
		);
		setCpf(storagedSession.cpf);
		if (cpf) getStorePreferences();
	}, []);

	const getStorePreferences = () => {
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
	};

	return (
		<LoadingOverlay
			active={!!getStoreGetAPI.loading}
			spinner
			text="Carregando..."
		>
			<DashboardView storePreference={getStoreGetAPI.data} />
		</LoadingOverlay>
	);
};

export default DashboardController;
