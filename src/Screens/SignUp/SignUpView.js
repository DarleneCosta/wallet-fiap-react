import { Field, Form, Formik } from 'formik';
import React from 'react';
import Alert from '../../Components/Alert/Alert';
import image from '../../Assets/login.jpg';

const SignUpView = ({ signUpFunction, signUpSchema, connectMessage }) => {
	return (
		<>
			<div className="bg-gray-200 flex flex-col xl:flex-row-reverse xl:items-center ">
				<div
					id="logo"
					className="flex justify-center content-center xl:flex xl:visible"
				>
					<img
						className="xl:visible w-36 h-36 mt-8 rounded-full xl:w-screen xl:h-screen xl:rounded-none xl:mt-0 xl:shadow-2xl"
						src={image}
						alt="Logo da carteira"
					/>
				</div>
				<div
					id="form"
					className="w-screen flex flex-col justify-center content-center"
				>
					<Formik
						initialValues={{
							name: '',
							email: '',
							birthDate: '',
							cpf: '',
							cellphone: '',
							password: ''
						}}
						validationSchema={signUpSchema}
						onSubmit={(values) => {
							signUpFunction(values);
						}}
					>
						{({ errors, touched }) => (
							<Form className="flex flex-col justify-center items-center space-y-10 xl:space-y-15 xl:w-full mb-10 h-full ">
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="text"
										name="name"
										placeholder="Nome"
									/>
									{errors.name && touched.name ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.name}
											</div>
										</div>
									) : null}
								</div>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="text"
										name="email"
										placeholder="Email"
									/>
									{errors.email && touched.email ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.email}
											</div>
										</div>
									) : null}
								</div>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="date"
										name="birthDate"
										placeholder="dd-mm-yyyy"
									/>
									{errors.birthDate && touched.birthDate ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.birthDate}
											</div>
										</div>
									) : null}
								</div>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="number"
										name="cpf"
										placeholder="CPF"
									/>
									{errors.cpf && touched.cpf ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.cpf}
											</div>
										</div>
									) : null}
								</div>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="number"
										name="cellphone"
										placeholder="Celular"
									/>
									{errors.cellphone && touched.cellphone ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.cellphone}
											</div>
										</div>
									) : null}
								</div>
								<div className=" flex flex-col justify-center items-center w-screen xl:w-full">
									<Field
										className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
										type="password"
										name="password"
										placeholder="Senha"
									/>
									{errors.password && touched.password ? (
										<div className="flex w-3/4">
											<div className="self-start w-3/4 text-red-500">
												{errors.password}
											</div>
										</div>
									) : null}
								</div>
								{connectMessage ? (
									<Alert
										title="Oops, não foi possível conectar"
										subTitle={connectMessage}
									/>
								) : null}
								<button
									type="submit"
									className="bg-blue-500 w-3/4 mb-16 rounded-lg h-12 text-white font-bold text-xl xl:mb-0"
								>
									Cadastrar
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default SignUpView;
