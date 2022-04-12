import React, { useState } from 'react';
import ApiConn from '../../Services/APIs/Common/api';
import SignUpView from './SignUpView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';


const SignUpController = () => {
	const [isActive, setIsActive] = useState(false);
	const [connectMessage, setConnectMessage] = useState('');
	const navigate = useNavigate();

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
		cellphone: Yup.string()
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
		setIsActive(true);
		ApiConn.post('/user/signup', signUpObject)
			.then((res) => {
				setTimeout(function () {
					setIsActive(false);
					navigate('/SignIn');
				}, 1500);
			})
			.catch((err) => setConnectMessage(err.toString()));
	};

	return (
		<LoadingOverlay active={isActive} spinner text="Carregando...">
			<SignUpView
				signUpFunction={doSignUp}
				signUpSchema={signUpSchema}
				connectMessage={connectMessage}
			/>
		</LoadingOverlay>
	);
};

export default SignUpController;
