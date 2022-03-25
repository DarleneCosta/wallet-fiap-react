import api from '../Common/api';

const setStorePreference = (cpf, idStore) => api.post(`/preference/${cpf}/${idStore}`);
const getAllStore = (cpf) => api.get(`/preference//${cpf}`);

export default {
	setStorePreference,
	getAllStore
};
