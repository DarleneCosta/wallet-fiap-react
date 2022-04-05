import React from 'react';
import { useState } from 'react';

import image from '../../assets/Wallet.jpg';

const SignUpView = ({ signUpFunction }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpf, setCpf] = useState('');
	const [name, setName] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [cellphone, setCellphone] = useState('');

	const handleSubmit = (event) => {
		console.log({
			name,
			email,
			cpf,
			cellphone,
			password
		});
		signUpFunction({
			name,
			email,
			cpf,
			cellphone,
			password
		});

		event.preventDefault();
	};

	return (
		<>
			<div className="h-screen bg-gray-200 flex flex-col xl:flex-row-reverse xl:items-center">
				<div
					id="logo"
					className="flex justify-center content-center hidden xl:flex xl:visible"
				>
					<img
						className="xl:visible w-40 h-40 mt-12 rounded-full xl:w-screen xl:h-screen xl:rounded-none xl:mt-0 xl:shadow-2xl"
						src={image}
						alt="Logo da carteira"
					/>
				</div>
				<div
					id="form"
					className="w-screen h-screen flex flex-col justify-center content-center"
				>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-center items-center space-y-16 xl:space-y-20"
					>
						<input
							className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="text"
							id="nome"
							placeholder="Nome"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="text"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<input
							className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="date"
							id="dtnascimento"
							placeholder="dd-mm-yyyy"
							value={birthDate}
							onChange={(e) => setBirthDate(e.target.value)}
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
							type="number"
							id="cellphone"
							placeholder="Celular"
							value={cellphone}
							onChange={(e) => setCellphone(e.target.value)}
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
							Cadastrar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpView;
