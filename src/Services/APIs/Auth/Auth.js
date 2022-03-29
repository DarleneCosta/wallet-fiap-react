import api from '../Common/api';

const signIn = (data) => api.post('/login', data);
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	 signIn
};
