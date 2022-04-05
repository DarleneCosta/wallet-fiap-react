import React from 'react';
import ApiConn from '../../services/APIs/Common/api';
import SignUpView from './SignUpView';

const SignUpController = () => {
	const doSignUp = (signUpObject) => {
		console.log('object to call api');
		console.log(signUpObject);

		ApiConn.post('/api/user/signup', signUpObject)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return <SignUpView signUpFunction={doSignUp} />;
};

export default SignUpController;
