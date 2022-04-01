import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import background from '../../Assets/login.jpg';
import loginImage from '../../Assets/img_login_.png';
import { WindowSharp } from '@mui/icons-material';

const SignInView = ({ connectMessage, loading, signInSchema, onSubmit, makeLogin }) => {

	
	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');

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
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-center items-center space-y-16 xl:space-y-20 "
					>
						<img
							className="w-40 h-40 mt-5 mb-5"
							src={loginImage}
							alt="Logo da carteira"
						/>
						<input
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="number"
							id="cpf"
							placeholder="CPF"
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
						/>
						<input
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="password"
							id="password"
							placeholder="Senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button className="bg-blue-500 w-3/4 rounded-lg h-12 text-white font-bold text-xl">
							Fazer Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
export default SignInView;
