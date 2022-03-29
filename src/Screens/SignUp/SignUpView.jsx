import React from 'react';

import image from '../../Assets/Wallet.jpg';

const SignUpView = () => {
	return (
		<>
			<div className="h-screen bg-gray-200 flex flex-col xl:flex-row xl:items-center">
				<div id="logo" className="flex justify-center content-center ">
					<img
						className="w-40 h-40 mt-12 rounded-full xl:w-screen xl:h-screen xl:rounded-none xl:mt-0 xl:shadow-2xl"
						src={image}
						alt="Logo da carteira"
					/>
				</div>
				<div
					id="form"
					className="w-screen h-screen flex flex-col justify-center  content-center"
				>
					<form
						action=""
						method="post"
						className=" flex flex-col justify-center items-center space-y-16 xl:space-y-20"
					>
						<input
							className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="text"
							id="nome"
							placeholder="Nome"
						/>

						<input
							className="w-3/4 h-8 bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="date"
							id="dtnascimento"
							placeholder="dd-mm-yyyy"
						/>

						<input
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="number"
							id="cpf"
							placeholder="CPF"
						/>

						<input
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="number"
							id="cellphone"
							placeholder="Celular"
						/>

						<input
							className="w-3/4 h-8  bg-transparent rounded-none border-b-2 border-zinc-700 focus:outline-none placeholder:font-semibold placeholder:text-zinc-600"
							type="password"
							id="password"
							placeholder="Senha"
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
