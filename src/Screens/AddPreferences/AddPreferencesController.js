import React, {  useRef, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import store from '../../Services/APIs/Store/Store';
import AddPreferencesView from './AddPreferencesView';

const people = [
	{
		id: 1,
		name: 'Wade Cooper',
		avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	},
	{
		id: 2,
		name: 'Arlene Mccoy',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	},
	{
		id: 3,
		name: 'Devon Webb',
		avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
	},
	{
		id: 4,
		name: 'Tom Cook',
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
	}
];

const AddPreferences = () => {
	const [open, setOpen] = useState(false);
	const getStoreAPI = useAPI(store.getAllStore);
	const cancelButtonRef = useRef(null);

	const handleClickOpen = async () => {
		await getStore();		
		setOpen(true);
	};
	const [selected, setSelected] = useState({});
	const getStore = async () => {
		await getStoreAPI.request();
	};
	return (
		<AddPreferencesView
			handleClickOpen={handleClickOpen}
			open={open}
			selected={selected}
			cancelButtonRef={cancelButtonRef}
			setOpen={setOpen}
			setSelected={setSelected}
			stores={getStoreAPI.data}
		/>
	);
};

export default AddPreferences;
