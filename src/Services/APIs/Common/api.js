import axios from 'axios';

const ApiConn = axios.create({
	baseURL: process.env.REACT_APP_API_URL //"http://localhost:8080",
});

export default ApiConn;
