import React from 'react';
import ApiConn from '../../Services/APIs/Common/api';
import SignUpView from './SignUpView';
import * as Yup from 'yup';

const SignUpController = () => {
	const signUpSchema = Yup.object().shape({
		cpf: Yup.string()
			.length(11, 'CPF são obrigatóriamente 11 dígitos')
			.required('CPF é obrigatório'),
		password: Yup.string()
			.min(4, 'Senha é muito pequena - tamanho mínimo 4 dígitos')
			.required('Senha é obrigatória'),
		email: Yup.string()
			.email('Formato de email inválido')
			.required('Email é obrigatório'),
		name: Yup.string().required('Nome é obrigatório'),
		cellphone: Yup.number()
			.min(11, 'DDD e número são obrigatórios')
			.max(11, 'DDD e número apenas')
			.required('Celular é obrigatório'),
		birthDate: Yup.date()
			.required('Data de nascimento é obrigatório')
			.min(new Date(1900, 1, 1), 'Data minima é 01/01/1900')
			.max(
				new Date(),
				'Data de nascimento não deve ser igual ao dia corrente nem posterior'
			)
	});

	const doSignUp = (signUpObject) => {
		console.log('object to call api');
		console.log(signUpObject);

		ApiConn.post('/user/signup', signUpObject)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return <SignUpView signUpFunction={doSignUp} signUpSchema={signUpSchema} />;
};

export default SignUpController;
