import { useState } from 'react';
import LoginView from './LoginView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import useAPI from '../../Services/APIs/Common/useAPI';
import auth from '../../Services/APIs/Auth/Auth';

const LoginController = () => {
	const [connectMessage, setConnectMessage] = useState('');
	const [infoLogin] = useState('');
	const navigate = useNavigate();
	const logInto = useAPI(auth.signIn);

	const signInSchema = Yup.object().shape({
		cpf: Yup.string()
			.required('CPF é obrigatório')
			.length(11, 'CPF são obrigatóriamente 11 dígitos'),
		password: Yup.string()
			.required('Senha é obrigatória')
			.min(4, 'Senha é muito pequena - tamanho mínimo 4 dígitos')
	});

	const onSubmit = (values) => {
		return new Promise((resolve, reject) => {
			logInto
				.requestPromise(values)
				.then((info) => {
					console.log(info); //todo:gravar o token

					navigate('Home', {
						state: {
							info: JSON.stringify(info)
						}
					});
				})
				.catch((error) => {
					setConnectMessage(error.toString());
				});
		});
	};

	return (
		<LoginView
			loading={logInto.loading}
			signInSchema={signInSchema}
			onSubmit={onSubmit}
			infoLogin={infoLogin}
			connectMessage={connectMessage}
		/>
	);
};

export default LoginController;
