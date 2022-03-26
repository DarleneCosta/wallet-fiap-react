import api from '../Common/api';

const logar = (data) => api.post('/login', data);

export default {
	logar
};
