
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import background from '../../assets/login.jpg';
import loginImage from '../../assets/img_login_.png';


const SignInView = ({ signInSchema, makeLogin }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="h-full flex flex-col xl:flex-row-reverse">
				<div className="hidden xl:w-2/4 xl:flex justify-center items-center content-center">
					<img className="w-full h-full" src={background} alt="" />
				</div>
				<div
					id="form"
					className="bg-gray-200 h-screen xl:w-2/4 flex justify-center items-center content-center"
				>
					<Formik
						initialValues={{
							cpf: '',
							password: ''
						}}
						validationSchema={signInSchema}
						onSubmit={(values) => {
							makeLogin(values);
						}}
					>
						{({ errors }) => (
							<Form className="flex flex-col justify-center items-center space-y-16 w-full">
								<img
									className="w-40 h-40 mt-5 mb-5"
									src={loginImage}
									alt="Logo da carteira"
								/>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										name="cpf"
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:border-blue-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
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

								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										name="password"
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:border-blue-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
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
											style={{
												cursor: 'pointer'
											}}
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
