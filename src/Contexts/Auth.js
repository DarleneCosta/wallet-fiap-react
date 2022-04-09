import React, { createContext, useState, useEffect } from 'react';
import api from '../services/APIs/Common/api';
import useAPI from '../services/APIs/Common/useAPI';
import auth from '../services/APIs/Auth/Auth';

const AuthContext = createContext({});

export const AuthProvider = (React.FC = ({ children }) => {
	/* eslint-disable */
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const useSignIn = useAPI(auth.signIn);
	
	useEffect(() => {
		const storagedSession = localStorage.getItem('@wallet:session');
		if (storagedSession) {
			setUser(JSON.parse(storagedSession));
			api.defaults.headers.Authorization = `Baerer ${storagedSession.token}`;
		}
		setLoading(false);
	}, []);

	async function signInto(userObject) {	
		const response = await useSignIn.requestPromise(userObject);
		setUser(response);
		localStorage.setItem('@wallet:session', JSON.stringify(response));		
		api.defaults.headers.Authorization = `Baerer ${response.token}`;
		setLoading(false)
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
