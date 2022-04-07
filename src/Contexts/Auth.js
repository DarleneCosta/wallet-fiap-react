import React, { createContext, useState } from 'react';
import useAPI from '../services/APIs/Common/useAPI';
import auth from '../services/APIs/Auth/Auth';

const AuthContext = createContext({});

export const AuthProvider = (React.FC = ({ children }) => {
	/* eslint-disable */
	const [user, setUser] = useState({});
	//const [loading, setLoading] = useState(true);
	const useSignIn = useAPI(auth.signIn);

	async function signInto(userObject) {
		const response = await useSignIn.requestPromise(userObject)
		setUser(response)
	}
	return (
		<AuthContext.Provider value={{ signed: user && user.token, signInto }}>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthContext;
