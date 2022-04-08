import React, { createContext, useState, useEffect } from 'react';
import useAPI from '../services/APIs/Common/useAPI';
import auth from '../services/APIs/Auth/Auth';

const AuthContext = createContext({});

export const AuthProvider = (React.FC = ({ children }) => {
	/* eslint-disable */
	const [user, setUser] = useState(null);
	//const [loading, setLoading] = useState(true);
	const useSignIn = useAPI(auth.signIn);

	useEffect(() => {
		const storagedSession = localStorage.getItem('@wallet:session');
		if (storagedSession) {
			setUser(JSON.parse(storagedSession));
		}
	}, []);

	async function signInto(userObject) {
		// let { loading } = useSignIn;
		// console.log(loading);
		const response = await useSignIn.requestPromise(userObject);
		//console.log(loading);
		setUser(response);
		localStorage.setItem('@wallet:session', JSON.stringify(response));
	}
	function signOut() {
		localStorage.clear();
		setUser(null);
	}
	return (
		<AuthContext.Provider
			value={{ signed: Boolean(user && user.token), signInto, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthContext;
