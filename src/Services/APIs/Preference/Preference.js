import api from '../Common/api';

const setStorePreference = (cpf, idStore) => api.post(`/preference/${cpf}/${idStore}`);

const getAllStorePreference = (cpf) => api.get(`/preference/${cpf}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setStorePreference,
	getAllStorePreference
};
