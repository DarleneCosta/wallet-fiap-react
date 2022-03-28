import { useState } from 'react';
import LoginView from './LoginView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import useAPI from '../../Services/APIs/Common/useAPI';
import login from '../../Services/APIs/Login/Login';

const LoginController = () => {
	const [infoLogin] = useState('');
	const navigate = useNavigate();
	const logInto = useAPI(login.logInto);

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
					console.log(error);
				});
		});
	};

	return (
		<LoginView
			loading={logInto.loading}
			signInSchema={signInSchema}
			onSubmit={onSubmit}
			infoLogin={infoLogin}
		/>
	);
};

export default LoginController;
