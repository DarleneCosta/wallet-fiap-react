import api from '../Common/api';

const signIn = (data) => api.post('/login', data);

const isLoggedIn = () => {
	const token = localStorage.getItem('token');

	return token !== null && token !== undefined ? true : false;
};

const deleteToken = () => {
	localStorage.removeItem('token');
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	signIn,
	isLoggedIn,
	deleteToken
};
