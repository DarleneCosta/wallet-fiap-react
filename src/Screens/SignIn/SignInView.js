import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik, Form, ErrorMessage } from 'formik';
import loginImg from '../../Assets/img_login_new.png';
const SignInView = ({ connectMessage, loading, signInSchema, onSubmit }) => {
	let message = null;
	if (!!connectMessage) {
		// message = (
		// 	<Alert color="error" variant="filled">
		// 		{' '}
		// 		{connectMessage}{' '}
		// 	</Alert>
		// );
	}
	return (//<div className="bg-white shadow overflow-hidden sm:rounded-lg"></div>
		<>
			<Formik
				initialValues={{
					cpf: '',
					password: ''
				}}
				validationSchema={signInSchema}
				onSubmit={onSubmit}
			>
				{(formik) => {
					const { setFieldValue } = formik;
					return (
						<Form>
							<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
								{/* //</div><// min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
								<div className="max-w-md w-full space-y-8">
									<img
										className="mx-auto  w-auto"
										src={loginImg}
										alt="imagem com usuario e asteriscos abaixo"
									/>

									<form className="mt-8 space-y-6" action="#" method="POST">
										<input type="hidden" name="remember" defaultValue="true" />
										<div className="rounded-md shadow-sm -space-y-px">
											<div>
												<label htmlFor="email-address" className="sr-only">
													Email address
												</label>
												<input
													id="outlined-number"
													type="number"
													onChange={(e) =>
														setFieldValue('cpf', e.target.value)
													}
													InputLabelProps={{
														shrink: true
													}}
													required
													className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													placeholder="CPF"
												/>
												<ErrorMessage
													name="cpf"
													component="span"
													className="infoError"
												/>
											</div>
											<div>
												<label htmlFor="password" className="sr-only">
													Password
												</label>
												<input
													id="password"
													name="password"
													type="password"
													required
													className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													placeholder="Senha"
													autoComplete="current-password"
													onChange={(e) =>
														setFieldValue('password', e.target.value)
													}
												/>
												<ErrorMessage
													name="password"
													component="span"
													className="infoError"
												/>
											</div>
										</div>

										<div>
											<button
												type="submit"
												className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
											>
												<span className="absolute left-0 inset-y-0 flex items-center pl-3">
													<LockClosedIcon
														className="h-5 w-5 text-blue-700 group-hover:text-blue-400"
														aria-hidden="true"
													/>
												</span>
												Entrar
											</button>
										</div>

										<div className="flex items-center justify-center">
											<div className="text-sm">
												<p
													href="#"
													className="font-medium text-black hover:text-blue-700"
												>
													Não tem conta? Cadastre-se
												</p>
											</div>
										</div>
									</form>
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
export default SignInView;
