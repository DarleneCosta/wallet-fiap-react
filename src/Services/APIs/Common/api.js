import axios from 'axios';

const ApiConn = axios.create({
	baseURL: 'http://localhost:8081' //process.env.REACT_APP_API_URL
});

export default ApiConn;
