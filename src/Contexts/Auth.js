import React, { createContext, useState, useEffect } from 'react';
import api from '../Services/APIs/Common/api';
import useAPI from '../Services/APIs/Common/useAPI';
import auth from '../Services/APIs/Auth/Auth';

const AuthContext = createContext({});

export const AuthProvider = (React.FC = ({ children }) => {
	/* eslint-disable */
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const useSignIn = useAPI(auth.signIn);

	useEffect(() => {
		const storagedSession = localStorage.getItem('@wallet:session');
		
		if (storagedSession) {
			let session = JSON.parse(storagedSession)
			setUser(session);
			api.defaults.headers.Authorization = `Bearer ${session.token}`;
		}
		setLoading(false);
	}, []);

	async function signInto(userObject) {
		const response = await useSignIn.requestPromise(userObject);
		setUser(response);
		localStorage.setItem('@wallet:session', JSON.stringify(response));
		api.defaults.headers.Authorization = `Bearer ${response.token}`;
		setLoading(false);
	}
	function signOut() {
		localStorage.clear();
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				signed: Boolean(user && user.token),
				signInto,
				signOut,
				loading
			}}
		>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthContext;
