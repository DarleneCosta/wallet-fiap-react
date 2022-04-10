import api from '../Common/api';

const setStorePreference = (cpf, idStore) => {
	if (!cpf) return;
	api.post(`/preference/${cpf}/${idStore}`);
};
const getAllStore = (cpf) => {
	if (!cpf) return;
	api.get(`/preference/${cpf}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	setStorePreference,
	getAllStore
};
