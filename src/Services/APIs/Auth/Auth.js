import api from '../Common/api';

const signIn = (data) => api.post('/login', data);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	signIn
};
