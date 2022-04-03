import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik, Form, ErrorMessage, validateYupSchema, Field } from 'formik';
import { useState } from 'react';
import background from '../../Assets/login.jpg';
import loginImage from '../../Assets/img_login_.png';
import { WindowSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SignInView = ({ signInSchema, makeLogin }) => {
	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		makeLogin({ cpf, password });

		event.preventDefault();
	};

	return (
		<>
			<div className="h-screen bg-gray-200 flex flex-col xl:flex-row-reverse xl:items-center">
				<div id="logo" className="justify-center content-center hidden xl:flex xl:visible">
					<img
						className="xl:visible w-40 h-40 mt-12 rounded-full xl:w-screen xl:h-screen xl:rounded-none xl:mt-0 xl:shadow-2xl"
						src={background}
						alt="Logo da carteira"
					/>
				</div>
				<div
					id="form"
					className="w-screen h-screen flex flex-col justify-center content-center "
				>
					<Formik
						initialValues={{
							cpf: '',
							password: ''
						}}
						validationSchema={signInSchema}
						onSubmit={(values) => {
							// same shape as initial values
							makeLogin(values);
						}}
					>
						{({ errors, touched }) => (
							<Form className="flex flex-col justify-center items-center space-y-16 xl:space-y-20 ">
								<img
									className="w-40 h-40 mt-5 mb-5"
									src={loginImage}
									alt="Logo da carteira"
								/>
								<div className=" flex flex-col justify-center items-center w-screen">
									<Field
										name="cpf"
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										placeholder="CPF"
									/>
									{errors.cpf ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.cpf}
											</div>
										</div>
									) : null}
								</div>

								<div className=" flex flex-col justify-center items-center w-screen">
									<Field
										name="password"
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="password"
										placeholder="Senha"
									/>
									{errors.password ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.password}
											</div>
										</div>
									) : null}
								</div>
								<button
									type="submit"
									className="bg-blue-500 w-3/4 rounded-lg h-12 text-white font-bold text-xl"
								>
									Fazer Login
								</button>
								<div className="flex items-center justify-center">
									<div className="text-sm">
										<p
											onClick={() => navigate('/SignUp')}
											className="font-medium text-black hover:text-blue-700"
										>
											Não tem conta? Cadastre-se
										</p>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};
export default SignInView;
