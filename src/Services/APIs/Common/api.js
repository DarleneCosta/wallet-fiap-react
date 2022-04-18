import axios from 'axios';

const ApiConn = axios.create({
	baseURL: 'http://localhost/api/' //process.env.REACT_APP_API_URL
});

export default ApiConn;
