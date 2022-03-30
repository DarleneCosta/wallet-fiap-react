import { useContext } from 'react';
import AuthContext from '../../Contexts/Auth';
import {
	Alert,
	Button,
	Card,
	CardActions,
	CircularProgress,
	Grid,
	TextField,
	CardActionArea,
	CardContent
} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import './Login.css';
import loginImg from '../../Assets/img_login_new.png';

const LoginView = ({ connectMessage, loading, signInSchema, onSubmit }) => {
	let message = null;
	if (!!connectMessage) {
		message = (
			<Alert color="error" variant="filled">
				{' '}
				{connectMessage}{' '}
			</Alert>
		);
	}
	return (
		<>
			{loading ? (
				<Grid
					height="100%"
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<CircularProgress />
				</Grid>
			) : (
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
							<Form className="formLogin">
								<Grid
									height="100%"
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid item xs={11} sm={8} md={3}>
										<Card>
											<CardActionArea noValidate>
												<CardContent>
													<img
														className="img"
														src={loginImg}
														width="60%"
														height="auto"
														alt="imagem com usuario e asteriscos abaixo"
													/>

													<TextField
														className="input"
														id="outlined-number"
														label="CPF"
														type="number"
														onChange={(e) =>
															setFieldValue('cpf', e.target.value)
														}
														InputLabelProps={{
															shrink: true
														}}
													/>
													<ErrorMessage
														name="cpf"
														component="span"
														className="infoError"
													/>
													<TextField
														className="input"
														id="outlined-password-input"
														label="Senha"
														type="password"
														autoComplete="current-password"
														onChange={(e) =>
															setFieldValue(
																'password',
																e.target.value
															)
														}
													/>
													<ErrorMessage
														name="password"
														component="span"
														className="infoError"
													/>
												</CardContent>
												{message}
												<CardActions className="actions">
													<Button variant="contained" type="submit">
														Entrar
													</Button>
												</CardActions>
											</CardActionArea>
										</Card>
									</Grid>
								</Grid>
							</Form>
						);
					}}
				</Formik>
			)}
		</>
	);
};

export default LoginView;
