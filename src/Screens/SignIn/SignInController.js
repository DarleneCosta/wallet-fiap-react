import { useState, useContext } from 'react';
import SignInView from './SignInView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Contexts/Auth';
import LoadingOverlay from 'react-loading-overlay';

const SignInController = () => {
	const { signInto, loading } = useContext(AuthContext);

	const [connectMessage, setConnectMessage] = useState('');
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
			let msg =
				err.toString().indexOf('403') >= 0
					? 'Usuário ou senha inválidos.'
					: err.toString();
			setConnectMessage(msg);
		}

	};

	return (
		<LoadingOverlay active={loading} spinner text="Carregando...">
			<SignInView
				signInSchema={signInSchema}
				connectMessage={connectMessage}
				makeLogin={makeLogin}
			/>
		</LoadingOverlay>
	);
};

export default SignInController;
