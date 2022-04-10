import axios from 'axios';

const ApiConn = axios.create({
	baseURL: 'http://localhost:8080/api' //process.env.REACT_APP_API_URL 
});

export default ApiConn;
