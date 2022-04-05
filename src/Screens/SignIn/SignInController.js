import { useState, useContext } from 'react';
import SignInView from './SignInView';
import * as Yup from 'yup';
import { Route, useNavigate } from 'react-router-dom';

import useAPI from '../../services/APIs/Common/useAPI';
import auth from '../../services/APIs/Auth/Auth';
import AuthContext from '../../contexts/Auth';

const SignInController = () => {
	const { signed } = useContext(AuthContext);
	console.log(signed);
	const [connectMessage, setConnectMessage] = useState('');
	const [infoSignIn] = useState('');
	const navigate = useNavigate();
	const signInto = useAPI(auth.signIn);

	const signInSchema = Yup.object().shape({
		cpf: Yup.string()
			.length(11, 'CPF são obrigatóriamente 11 dígitos')
			.required('CPF é obrigatório'),
		password: Yup.string()
			.min(4, 'Senha é muito pequena - tamanho mínimo 4 dígitos')
			.required('Senha é obrigatória')
	});

	const makeLogin = async (userObject) => {
		const data = await signInto.requestPromise(userObject);

		console.log(data);
		// .then((res) => {
		// 	console.log(res);
		if (data.token) {
			localStorage.setItem('token', data.token);
			navigate('/Wallet');
		}
		// 	navigate('/Wallet');
		// 	resolve(...res.data);
		// })
		// .catch((err) => {
		// 	console.log(err);
		// });
	};

	return (
		<SignInView
			loading={signInto.loading}
			signInSchema={signInSchema}
			infoSignIn={infoSignIn}
			connectMessage={connectMessage}
			makeLogin={makeLogin}
		/>
	);
};

export default SignInController;
