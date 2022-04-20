import { useState } from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (apiFunc) => {

	const [data, setData] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		try {
			const result = await apiFunc(...args);
			setData(result.data);
		} catch (err) {
			setError(err.message || 'Unexpected Error!');
		} finally {
			setLoading(false);
		}
	};

	const requestPromise = async (...args) => {
		return new Promise((resolve, reject) => {
			setLoading(true);
			try {
				apiFunc(...args)
					.then((result) => {
						resolve(result.data);
					})
					.catch((error) => {					
						reject(error);
					});
			} catch (err) {
				reject(err.message || 'Unexpected Error!');
			} finally {
				setLoading(false);
			}
		});
	};

	return {
		data,
		error,
		loading,
		request,
		requestPromise
	};
};
