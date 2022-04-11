import api from '../Common/api';

const getBalance = (cpf) => {
	if (!cpf) return;
	api.get(`/wallet/${cpf}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getBalance
};
