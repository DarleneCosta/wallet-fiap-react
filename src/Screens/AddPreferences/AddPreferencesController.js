import React, { useRef, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import AddPreferencesView from './AddPreferencesView';
import LoadingOverlay from 'react-loading-overlay';

const AddPreferences = ({ user, confirmReload, stores }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	const addPreferenceAPI = useAPI(store.setStorePreference);
	const cancelButtonRef = useRef(null);

	const handleClickOpen = async () => {
		setSelected(stores[0]);
		setOpen(true);
	};

	const handleClickYes = async () => {
		if (!selected) return;
		await addPreferenceAPI.request(user, selected.id);
		confirmReload(true);
		setOpen(false);
	};

	return (
		<LoadingOverlay
			active={!!addPreferenceAPI.loading}
			spinner
			text="Aguarde"
		>
			<AddPreferencesView
				handleClickOpen={handleClickOpen}
				open={open}
				selected={selected}
				cancelButtonRef={cancelButtonRef}
				setOpen={setOpen}
				setSelected={setSelected}
				stores={stores}
				handleClickYes={handleClickYes}
			/>
		</LoadingOverlay>
	);
};

export default AddPreferences;
