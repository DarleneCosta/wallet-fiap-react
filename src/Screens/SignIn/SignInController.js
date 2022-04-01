import { useState } from 'react';
import SignInView from './SignInView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import useAPI from '../../Services/APIs/Common/useAPI';
import auth from '../../Services/APIs/Auth/Auth';

const SignInController = () => {
	const [connectMessage, setConnectMessage] = useState('');
	const [infoSignIn] = useState('');
	const navigate = useNavigate();
	const SignInto = useAPI(auth.signIn);

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
			SignInto.requestPromise(values)
				.then((info) => {
					console.log(info); //todo:gravar o token

					navigate('Wallet', {
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
		<SignInView
			loading={SignInto.loading}
			signInSchema={signInSchema}
			onSubmit={onSubmit}
			infoSignIn={infoSignIn}
			connectMessage={connectMessage}
		/>
	);
};

export default SignInController;
