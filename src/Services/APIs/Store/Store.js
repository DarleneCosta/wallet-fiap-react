import api from '../Common/api';

const deleteStorePreference = (cpf, idStore) =>
	api.delete(`/preference/${cpf}/${idStore}`);

const setStorePreference = (cpf, idStore) =>
	api.post(`/preference/${cpf}/${idStore}`);

const getAllStorePreference = (cpf) => api.get(`/preference/${cpf}`);

const getAllStore = () => api.get(`/store`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	deleteStorePreference,
	setStorePreference,
	getAllStorePreference,
	getAllStore
};
