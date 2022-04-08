import { useState, useContext } from 'react';
import SignInView from './SignInView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/Auth';

const SignInController = () => {
	const { signInto } = useContext(AuthContext);

	const [connectMessage, setConnectMessage] = useState('');
	const [infoSignIn] = useState('');
	const navigate = useNavigate();

	const signInSchema = Yup.object().shape({
		cpf: Yup.string()
			.length(11, 'CPF são obrigatóriamente 11 dígitos')
			.required('CPF é obrigatório'),
		password: Yup.string()
			.min(4, 'Senha é muito pequena - tamanho mínimo 4 dígitos')
			.required('Senha é obrigatória')
	});

	const makeLogin = async (userObject) => {
		try {
			await signInto(userObject);
			navigate('/');
		} catch (err) {
			setConnectMessage(err);
		}
	};

	return (
		<SignInView
			signInSchema={signInSchema}
			infoSignIn={infoSignIn}
			connectMessage={connectMessage}
			makeLogin={makeLogin}
		/>
	);
};

export default SignInController;
