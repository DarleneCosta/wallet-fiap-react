import api from '../Common/api';

const getAllStore = () => api.get(`/store`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getAllStore
};
