import React from 'react';
import ApiConn from '../../Services/APIs/Common/api';
import SignUpView from './SignUpView';

const SignUpController = () => {
	const doSignUp = (signUpObject) => {
		ApiConn.post('user/signup', signUpObject)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return <SignUpView signUpFunction={doSignUp} />;
};

export default SignUpController;
