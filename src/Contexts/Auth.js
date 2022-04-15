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
			api.defaults.headers.Authorization = `Bearer ${session.token}`;
			setUser(session.cpf);
		}
		setLoading(false);
	}, []);

	async function signInto(userObject) {
		const response = await useSignIn.requestPromise(userObject);	
		localStorage.setItem('@wallet:session', JSON.stringify(response));
		api.defaults.headers.Authorization = `Bearer ${response.token}`;
		setUser(response.cpf);
		setLoading(false);
	}
	function signOut() {
		localStorage.clear();
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				signInto,
				signOut,
				loading, 
				user
			}}
		>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthContext;
