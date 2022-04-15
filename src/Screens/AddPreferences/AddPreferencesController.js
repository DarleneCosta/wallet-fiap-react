import React, { useRef, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import AddPreferencesView from './AddPreferencesView';
import LoadingOverlay from 'react-loading-overlay';

const AddPreferences = ({ user , confirmReload}) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const getStoreAPI = useAPI(store.getAllStore);
	const addPreferenceAPI = useAPI(store.setStorePreference);
	const cancelButtonRef = useRef(null);

	const handleClickOpen = async () => {
		await getStore();
		setOpen(true);
	};
	const handleClickYes = async () => {
		if (!selected) return;
		await addPreferenceAPI.request(user, selected.id);
		confirmReload(true)
		setOpen(false);
	};

	const getStore = async () => {
		await getStoreAPI.request();
		if (getStoreAPI.data.length > 0) {
			setSelected(getStoreAPI.data[0]);
		}
	};

	return (
		<LoadingOverlay
			active={!!getStoreAPI.loading || !!addPreferenceAPI.loading}
			spinner
			text="Aguarde"
			className="h-screen"
		>
			<AddPreferencesView
				handleClickOpen={handleClickOpen}
				open={open}
				selected={selected}
				cancelButtonRef={cancelButtonRef}
				setOpen={setOpen}
				setSelected={setSelected}
				stores={getStoreAPI.data}
				handleClickYes={handleClickYes}
			/>
		</LoadingOverlay>
	);
};

export default AddPreferences;
