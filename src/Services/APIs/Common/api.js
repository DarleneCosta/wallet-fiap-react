import axios from 'axios';

const ApiConn = axios.create({
	baseURL: 'http://18.231.123.143' //process.env.REACT_APP_API_URL
});

export default ApiConn;
