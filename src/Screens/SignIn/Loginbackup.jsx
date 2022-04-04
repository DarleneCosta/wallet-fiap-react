export default mycomponent = () => {
	return (
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
				<Form className="flex flex-col justify-center items-center space-y-16">
					<img className="w-40 h-40 mt-5 mb-5" src={loginImage} alt="Logo da carteira" />
					<div className=" flex flex-col justify-center items-center w-screen">
						<Field
							name="cpf"
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							placeholder="CPF"
						/>
						{errors.cpf ? (
							<div className="flex w-3/4">
								<div className="self-start w-3/4 text-red-500">{errors.cpf}</div>
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
	);
};
